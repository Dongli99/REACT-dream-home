import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HireStaff = () => {
  const [staffDetails, setStaffDetails] = useState({
    staffNo: "",
    fname: "",
    lname: "",
    position: "",
    sex: "",
    dob: "",
    salary: "",
    branchNo: "",
    telephone: "",
    mobile: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (key, newValue) => {
    setStaffDetails((prevDetails) => ({
      ...prevDetails,
      [key]: newValue,
    }));
  };

  const handleConfirmClick = async () => {
    try {
      await axios.post(`http://localhost:8080/api/staff`, staffDetails);
      navigate("/staff/all");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Bad request: ID already exists.");
      } else if (error.response.status === 409) {
        alert("Foreign Key Constraint: Branch may not exist.");
      } else {
        alert("Hire Failed. Try again later");
      }
    }
  };

  const handleCancelClick = () => {
    navigate("/staff/all");
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Hire Staff</h3>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(staffDetails).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                <input
                  type="text"
                  placeholder={key}
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>
    </div>
  );
};
