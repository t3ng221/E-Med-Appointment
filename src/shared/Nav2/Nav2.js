import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Nav2 = () => {
  const { user, admin, logout } = useAuth();
  const history = useHistory();

  //This process detect whether the logged user admin or not then render specefic component    ////conditionally below//
  // where a = normal user and b = admin//

  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  React.useEffect(() => {
    user.email ? setA(1) : setA(0);
  }, [user.email]);
  React.useEffect(() => {
    admin ? setB(1) : setB(0);
  }, [admin]);
  React.useEffect(() => {
    if (b === 1) {
      setA(0);
    }
  }, [b]);
  React.useEffect(() => {
    if (admin) {
      localStorage.setItem("isAdm", admin);
    } else {
      localStorage.setItem("isAdm", admin);
    }
  }, [admin]);
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <span>DJI-X</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/packages">
                Explor Products
              </Nav.Link>
              {Boolean(b) ? (
                <>
                  <NavDropdown title="Admin Dashbord" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/makeadmin">
                      Make an Admin
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageall">
                      Manage All Order
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mproducts">
                      Manage All Products
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addservice">
                      Add a New Product
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mreviews">
                      Manage Review
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button
                    onClick={() => {
                      logout();
                      window.location.reload();
                    }}
                    variant="outline-secondary "
                  >
                    Logout
                  </Button>
                </>
              ) : Boolean(a) ? (
                <>
                  <NavDropdown title="Dashbord" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/payment">
                      Payment
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/myorder">
                      My Order
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addreview">
                      Review
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button
                    onClick={() => {
                      logout();
                      window.location.reload();
                    }}
                    variant="outline-secondary "
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline-warning"
                    onClick={() => history.push("/login")}
                  >
                    Login | Register
                  </Button>
                </>
              )}

              {/* end  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav2;