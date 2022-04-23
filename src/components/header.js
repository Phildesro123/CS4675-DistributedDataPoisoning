import { Navbar, Container } from "react-bootstrap"; 

function Header() {
    return (
      <div className="Header">
        <Navbar bg ="light">    
            <Container>
                <Navbar.Brand>CS4675 Group 3 Demo</Navbar.Brand>
            </Container>
        </Navbar>
      </div>
    );
  }
export default Header;
