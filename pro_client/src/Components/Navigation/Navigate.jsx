import React, { useContext, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import './NavbarStyles.css';



const Navigate = () => {
 
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    if (!userInfo.email) {
      axios.get('http://localhost:5000/user/', {
        withCredentials: true,
      })
        .then(response => {
          setUserInfo(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  },
    [userInfo, setUserInfo]);

 
  const logout = () => {

    axios.post('http://localhost:5000/logout', null, { withCredentials: true })
      .then(res => {

        setUserInfo({});
      })

      .catch(error => {
        console.error('Error logging out:', error);
      });
  }
 
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" > 
        <Container>
          <Navbar.Brand><span id='span1'>Fantasy</span> <span id='span2'>Game</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/characters">Characters</Nav.Link>
              <Nav.Link href="/system">System</Nav.Link>

              <Nav.Link href="/reviews">Reviews</Nav.Link>
          
              {userInfo.email ?
                <>
                  <Nav.Link href="/makereview">Leave a review</Nav.Link>
                  <Nav.Link onClick={logout}>Logout: {userInfo.email}</Nav.Link>
                </>
                : 
                <>
                  <Nav.Link href="/signup/">Sign Up</Nav.Link>
                  <Nav.Link href="/login/">Log In</Nav.Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate;



