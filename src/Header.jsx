import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Dream Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="STAFF" id="basic-nav-dropdown">
              <NavDropdown.Item href="/staff/all">All Staffs</NavDropdown.Item>
              <NavDropdown.Item href="/staff/hire">Hire Staff</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BRANCH" id="basic-nav-dropdown">
              <NavDropdown.Item href="/branch/all">
                All Branches
              </NavDropdown.Item>
              <NavDropdown.Item href="/branch/open">Open New</NavDropdown.Item>
              <NavDropdown.Item href="/branch/search">
                Search Address
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CLIENT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/client/register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/client/all">
                All Clients
              </NavDropdown.Item>
              <NavDropdown.Item href="/client/search">Search</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
