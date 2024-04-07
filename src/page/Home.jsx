import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <Card className="h-100">
              <div className="card-header bg-primary text-white">BRANCH</div>
              <div className="card-body">
                <Card.Title>Branch Management</Card.Title>
                <Card.Text>
                  Manage all branches including opening new branches.
                </Card.Text>
                <Card.Link as={Link} to="/branch/all" className="text-primary">
                  All Branches
                </Card.Link>
                <br />
                <Card.Link as={Link} to="/branch/open" className="text-primary">
                  Open a Branch
                </Card.Link>
                <br />
                <Card.Link
                  as={Link}
                  to="/branch/search"
                  className="text-primary"
                >
                  Search a Branch
                </Card.Link>
              </div>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <div className="card-header bg-success text-white">STAFF</div>
              <div className="card-body">
                <Card.Title>Staff Management</Card.Title>
                <Card.Text>
                  Manage all staff members including hiring new staff, list all
                  staff, and delete a staff.
                </Card.Text>
                <Card.Link as={Link} to="/staff/all" className="text-success">
                  All Staffs
                </Card.Link>
                <br />
                <Card.Link as={Link} to="/staff/hire" className="text-success">
                  Hire Staff
                </Card.Link>
              </div>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <div className="card-header bg-danger text-white">CLIENT</div>
              <div className="card-body">
                <Card.Title>Client Management</Card.Title>
                <Card.Text>
                  Manage all clients including registration and search.
                </Card.Text>
                <Card.Link
                  as={Link}
                  to="/client/register"
                  className="text-danger"
                >
                  Register Client
                </Card.Link>
                <br />
                <Card.Link as={Link} to="/client/all" className="text-danger">
                  View All Clients
                </Card.Link>
                <br />
                <Card.Link
                  as={Link}
                  to="/client/search"
                  className="text-danger"
                >
                  Search Client
                </Card.Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
