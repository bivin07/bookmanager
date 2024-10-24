import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
          <div>

<Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-book"></i>
            Book Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  
      
    </>
  )
}

export default Header
