import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ListStaffs = () => {
  const [staffList, setStaffList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/staff");
      setStaffList(response.data); // Assuming the response data is an array of staff objects
    } catch (error) {
      console.error("Error fetching staff list:", error);
    }
  };

  const handleUpdateClick = (staffNo) => {
    navigate(`/staff/update/${staffNo}`);
  };

  const handleDeleteClick = async (staffNo) => {
    try {
      await axios.delete(`http://localhost:8080/api/staff/${staffNo}`);
      fetchStaffList();
    } catch (error) {
      console.error("Failed to delete. Try later.");
    }
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Staff List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>StaffNo</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Position</th>
            <th>Email</th>
            <th>Sex</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>BranchNo</th>
            <th>Telephone</th>
            <th>Mobile</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff, index) => (
            <tr key={index}>
              <td>{staff.staffNo}</td>
              <td>{staff.fname}</td>
              <td>{staff.lname}</td>
              <td>{staff.position}</td>
              <td style={{ maxWidth: "100px", wordWrap: "break-word" }}>
                {staff.email}
              </td>
              <td>{staff.sex}</td>
              <td>{staff.dob}</td>
              <td>{staff.salary}</td>
              <td>{staff.branchNo}</td>
              <td>{staff.telephone}</td>
              <td>{staff.mobile}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(staff.staffNo)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(staff.staffNo)}
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
