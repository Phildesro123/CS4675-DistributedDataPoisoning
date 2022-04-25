import { Navbar, Container } from "react-bootstrap"; 

function Header() {
    return (
      <div className="Header">
        <Navbar style={{ backgroundColor: "#CCD4F2" }}>    
            <Container>
                <Navbar.Brand>CS4675 Group 3 Demo</Navbar.Brand>
            </Container>
        </Navbar>
      </div>
    );
  }
export default Header;
