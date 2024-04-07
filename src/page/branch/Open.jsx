import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const OpenBranch = () => {
  const [branchDetails, setBranchDetails] = useState({
    branchNo: "",
    street: "",
    city: "",
    postCode: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (key, newValue) => {
    setBranchDetails((prevDetails) => ({
      ...prevDetails,
      [key]: newValue,
    }));
  };

  const handleConfirmClick = async () => {
    try {
      await axios.post(`http://localhost:8080/api/branch`, branchDetails);
      navigate("/branch/all");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Bad request: ID already exists.");
      } else {
        alert("Open Failed. Try again later");
      }
    }
  };

  const handleCancelClick = () => {
    navigate("/branch/all");
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Open branch</h3>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(branchDetails).map(([key, value]) => (
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
