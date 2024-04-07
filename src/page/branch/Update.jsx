import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const UpdateBranch = () => {
  const { branchNo } = useParams();
  const [branchDetails, setBranchDetails] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBranchDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/branch/${branchNo}`
        );
        setBranchDetails(response.data);
      } catch (error) {
        console.error("Error fetching branch details:", error);
      }
    };
    fetchBranchDetails();
  }, [branchNo]);

  const handleInputChange = (key, newValue) => {
    setBranchDetails((prevDetails) => ({
      ...prevDetails,
      [key]: newValue,
    }));
  };

  const handleConfirmClick = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/branch/${branchNo}`,
        branchDetails
      );
      navigate("/branch/all");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Bad request: ID cannot be changed.");
      } else {
        alert("Updating Failed. Try again later");
      }
    }
  };

  const handleCancelClick = () => {
    navigate("/branch/all");
  };

  if (!branchDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mt-3">
      <h3 className="text-center">Update Branch</h3>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(branchDetails).map(([key, value]) => (
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
