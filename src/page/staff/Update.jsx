import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const UpdateStaff = () => {
  const { staffNo } = useParams();
  const [staffDetails, setStaffDetails] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStaffDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/staff/${staffNo}`
        );
        setStaffDetails(response.data);
      } catch (error) {
        console.error("Error fetching staff details:", error);
      }
    };
    fetchStaffDetails();
  }, [staffNo]);

  const handleInputChange = (key, newValue) => {
    setStaffDetails((prevDetails) => ({
      ...prevDetails,
      [key]: newValue,
    }));
  };

  const handleConfirmClick = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/staff/${staffNo}`,
        staffDetails
      );
      navigate("/staff/all");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Bad request: ID cannot be changed.");
      } else if (error.response.status === 409) {
        alert("Foreign Key Constraint: Branch may not exist.");
      } else {
        alert("Updating Failed. Try again later");
      }
    }
  };

  const handleCancelClick = () => {
    navigate("/staff/all");
  };

  if (!staffDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mt-3">
      <h3 className="text-center">Update Staff</h3>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(staffDetails).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                <input
                  type="text"
                  defaultValue={value}
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
