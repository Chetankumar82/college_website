// routes/studentRoutes.js
const express = require('express');
const noticeRouter = express.Router();
const multer = require('multer');
const noticeController = require('../controller/noticeController');

const getCurrentFormattedDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + " " + getCurrentFormattedDate()); // Naming file with timestamp to avoid duplicates
  }
});

const upload = multer({ storage: storage });




noticeRouter.post('/notice', upload.single('file'), noticeController.createNotice);
noticeRouter.get('/notice', noticeController.getAllNotices);
noticeRouter.get('/notice/:id', noticeController.getNoticeById);
noticeRouter.delete('/notice/:id', noticeController.deleteNotice);

module.exports = noticeRouter;
