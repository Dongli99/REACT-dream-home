import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ListBranches = () => {
  const [branchList, setBranchList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBranchList();
  }, []);

  const fetchBranchList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/branch");
      setBranchList(response.data); // Assuming the response data is an array of branch objects
    } catch (error) {
      console.error("Error fetching branch list:", error);
    }
  };

  const handleUpdateClick = (branchNo) => {
    navigate(`/branch/update/${branchNo}`);
  };

  const handleDeleteClick = async (branchNo) => {
    try {
      await axios.delete(`http://localhost:8080/api/branch/${branchNo}`);
      fetchBranchList();
    } catch (error) {
      console.error("Failed to delete. Try later.");
    }
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Branch List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>BranchNo</th>
            <th>Street</th>
            <th>City</th>
            <th>PostCode</th>
          </tr>
        </thead>
        <tbody>
          {branchList.map((branch, index) => (
            <tr key={index}>
              <td>{branch.branchNo}</td>
              <td>{branch.street}</td>
              <td>{branch.city}</td>
              <td>{branch.postCode}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(branch.branchNo)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(branch.branchNo)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
