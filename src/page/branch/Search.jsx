import React, { useState } from "react";
import axios from "axios";

export const SearchBranch = () => {
  const [branchNo, setBranchNo] = useState("");
  const [branchDetails, setBranchDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/branch/${branchNo}`
      );
      setBranchDetails(response.data);
    } catch (error) {
      console.error("Error fetching branch details:", error);
    }
  };

  const handleCopy = () => {
    const branchAddressText = `${branchDetails.street}, ${branchDetails.city}, ${branchDetails.postCode}`;
    navigator.clipboard
      .writeText(branchAddressText)
      .then(() => {
        alert("Branch details copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying branch details to clipboard:", error);
      });
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Search Branch</h3>
      <div className="mb-3">
        <label htmlFor="branchNo" className="form-label">
          BranchNo
        </label>
        <input
          type="text"
          className="form-control"
          id="branchNo"
          value={branchNo}
          onChange={(e) => setBranchNo(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSearch}>
        Search
      </button>
      {branchDetails && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Branch Address</h5>
            <p className="card-text">
              {`${branchDetails.street}, ${branchDetails.city}, ${branchDetails.postCode}`}
            </p>
            <button className="btn btn-secondary" onClick={handleCopy}>
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
