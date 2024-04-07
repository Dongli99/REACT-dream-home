import React, { useState } from "react";
import axios from "axios";

export const SearchClient = () => {
  const [clientNo, setClientNo] = useState("");
  const [clientDetails, setClientDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/client/${clientNo}`
      );
      setClientDetails(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Client Not Found.");
      } else {
        alert("Error. Try again later");
      }
    }
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">Search Client</h3>
      <div className="mb-3">
        <label htmlFor="clientNo" className="form-label">
          ClientNo
        </label>
        <input
          type="text"
          className="form-control"
          id="clientNo"
          value={clientNo}
          onChange={(e) => setClientNo(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSearch}>
        Search
      </button>
      {clientDetails && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Client Details</h5>
            <table className="table">
              <tbody>
                <tr>
                  <th>Client Number</th>
                  <td>{clientDetails.clientNo}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    {clientDetails.firstName} {clientDetails.lastName}
                  </td>
                </tr>
                <tr>
                  <th>Telephone Number</th>
                  <td>{clientDetails.telephoneNo.trim()}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    {clientDetails.street}, {clientDetails.city},{" "}
                    {clientDetails.postCode}
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{clientDetails.email}</td>
                </tr>
                <tr>
                  <th>Preferred Type</th>
                  <td>{clientDetails.prefType}</td>
                </tr>
                <tr>
                  <th>Max Rent</th>
                  <td>{clientDetails.maxRent}</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>
      )}
    </div>
  );
};
