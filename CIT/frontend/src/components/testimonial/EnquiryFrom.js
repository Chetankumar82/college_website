import React, { useState } from "react";
import axios from "axios";
import "./EnquiryForm.css";

// Sample data for states
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const EnquiryForm = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, number, message, city, state, branch } = e.target.elements;
    let conFom = {
      name: name.value,
      number: number.value,
      message: message.value,
      city: city.value,
      state: state.value,
      branch: branch.value,
    };

    try {
      await axios.post("http://localhost:5000/submit-enquiry", conFom);
      setFormStatus("Send");
      name.value = "";
      number.value = "";
      message.value = "";
      city.value = "";
      state.value = "";
      branch.value = "";
      alert("Enquiry submitted successfully!");
    } catch (error) {
      console.error("There was an error submitting the enquiry!", error);
      setFormStatus("Send");
    }
  };

  return (
    <div className="enquiry-form">
      <div className="enquiry-form-inner">
        <div className="e-header-section">
          <h2 className="e-header">Enquiry Form</h2>
          <p className="">Let's Contact Us</p>
        </div>
        <div className="form-area">
          <form onSubmit={onSubmit}>
            
            <div className="mb-3 in">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Full Name*"
                required
              />
            </div>
            <div className="mb-3 in">
              <input
                className="form-control"
                type="text"
                id="number"
                placeholder="Contact No.*"
                required
              />
            </div>
            <div className="mb-3 in">
              <select className="form-select" id="state" required>
                <option selected disabled value="">
                  Select State*
                </option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 in">
              <input
                className="form-control"
                type="text"
                id="city"
                placeholder="City/Town*"
                required
              />
            </div>
            <div className="mb-3 in">
              <select className="form-select" id="branch" required>
                <option selected disabled value="">
                  Interested in Branch*
                </option>
                <option value="mechanical">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
                <option value="electrical">Electrical Engineering</option>
                <option value="electronics">Electronics Engineering</option>
                <option value="computer-science">
                  Computer Science Engineering
                </option>
              </select>
            </div>
            <div className="mb-3 in">
              <textarea
                className="form-control"
                id="message"
                placeholder="Enquiry*"
                required
              />
            </div>
            <div className="mb-3 in">
              <button
                className="s-btn"
                style={{
                  background: "#16093E",
                  width: "100%",
                  padding: "2px",
                  color: "whitesmoke",
                  fontSize: "20px",
                }}
                type="submit"
              >
                {formStatus}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
