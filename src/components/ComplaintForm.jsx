import React, { useReducer } from "react";
import "./ComplaintForm.css";

const initialState = {
  complaintType: "",
  fullName: "",
  email: "",
  phone: "",
  accountNumber: "",
  address: "",
  category: "",
  description: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };
    default:
      return state;
  }
};

const BankingComplaintForm = ({addComplaint}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleRadioChange = (e) => {
    dispatch({ type: "UPDATE_FIELD", field: "complaintType", value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComplaint(state); 
    console.log("Submitted Data:", state);
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Raise Complaint</h2>
        <p className="subtitle">(To be resolved within 3–5 business days)</p>

        <div className="form-group">
          <label>Select complaint type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="complaintType"
                value="Unauthorized Transaction"
                checked={state.complaintType === "Unauthorized Transaction"}
                onChange={handleRadioChange}
              />
              Unauthorized Transaction
            </label>
            <label>
              <input
                type="radio"
                name="complaintType"
                value="Wrong Credit/Debit"
                checked={state.complaintType === "Wrong Credit/Debit"}
                onChange={handleRadioChange}
              />
              Wrong Credit/Debit
            </label>
            <label>
              <input
                type="radio"
                name="complaintType"
                value="Others"
                checked={state.complaintType === "Others"}
                onChange={handleRadioChange}
              />
              Others
            </label>
          </div>
        </div>

        <div className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={state.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={state.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={state.accountNumber}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="address"
          placeholder="Your Address"
          value={state.address}
          onChange={handleChange}
        />

        <select
          name="category"
          value={state.category}
          onChange={handleChange}
        >
          <option value="">Select Complaint Category</option>
          <option value="transaction">Transaction Issue</option>
          <option value="atm">ATM / Cash Issues</option>
          <option value="loan">Loan Related</option>
          <option value="service">Service Related</option>
        </select>

        <textarea
          name="description"
          rows="4"
          placeholder="Explain your complaint in detail"
          value={state.description}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default BankingComplaintForm;
