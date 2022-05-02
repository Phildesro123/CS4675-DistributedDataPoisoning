import { Navbar, Container } from "react-bootstrap"; 

function Header() {
    return (
      <div className="Header">
        <Navbar style={{ backgroundColor: "#B3A369"}}>    
            <Container>
                <h1>Data Poisoning Visualization Tool</h1>
            </Container>
        </Navbar>
      </div>
    );
  }
export default Header;
