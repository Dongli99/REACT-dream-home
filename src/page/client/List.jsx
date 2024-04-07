import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ListClients = () => {
  const [clientList, setClientList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClientList();
  }, []);

  const fetchClientList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/client");
      setClientList(response.data); // Assuming the response data is an array of client objects
    } catch (error) {
      console.error("Error fetching client list:", error);
    }
  };

  const handleUpdateClick = (clientNo) => {
    navigate(`/client/update/${clientNo}`);
  };

  const handleDeleteClick = async (clientNo) => {
    try {
      await axios.delete(`http://localhost:8080/api/client/${clientNo}`);
      fetchClientList();
    } catch (error) {
      console.error("Failed to delete. Try later.");
    }
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Client List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ClientNo</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Telephone</th>
            <th>Street</th>
            <th>City</th>
            <th>Email</th>
            <th>PrefType</th>
            <th>MaxRent</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((client, index) => (
            <tr key={index}>
              <td>{client.clientNo}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.telephoneNo}</td>
              <td>{client.street}</td>
              <td>{client.city}</td>
              <td style={{ maxWidth: "100px", wordWrap: "break-word" }}>
                {client.email}
              </td>
              <td>{client.prefType}</td>
              <td>{client.maxRent}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(client.clientNo)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(client.clientNo)}
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
