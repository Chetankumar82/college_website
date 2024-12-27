const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDB connected');
  }).catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/student',require('./routes/studentRoute'))
app.use('/api/notices', require('./routes/noticeRoute'))
app.use('/uploads', express.static('uploads')); // Serve static files
app.use('/api/labManuals', require('./routes/labManuals'));
app.use('/api/event-images', require('./routes/eventImageRoutes'));

app.use('/api', require('./routes/facultiesRoutes'));

app.post("/submit-enquiry", (req, res) => {
  const { name, number, message, city, state, branch } = req.body;

  // Load existing workbook or create a new one
  let workbook;
  if (fs.existsSync("enquiries.xlsx")) {
    workbook = XLSX.readFile("enquiries.xlsx");
  } else {
    workbook = XLSX.utils.book_new();
  }

  // Select the first sheet or create a new one
  const sheetName = "Enquiries";
  let worksheet;
  if (workbook.SheetNames.includes(sheetName)) {
    worksheet = workbook.Sheets[sheetName];
  } else {
    worksheet = XLSX.utils.aoa_to_sheet([
      ["Name", "Number", "Message", "City", "State", "Branch"],
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  // Convert worksheet to JSON and add new entry
  const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  sheetData.push([name, number, message, city, state, branch]);

  // Convert JSON back to worksheet
  const newWorksheet = XLSX.utils.aoa_to_sheet(sheetData);

  // Replace the old worksheet with the new one
  workbook.Sheets[sheetName] = newWorksheet;

  // Write to file
  XLSX.writeFile(workbook, "enquiries.xlsx");

  res.send("Enquiry submitted successfully!");
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));


