import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../HomeStyles.css';
import  ScrollToTopButton from'../ScrollButton/ScrollToTopButton';

import {
  
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
  from 'mdb-react-ui-kit';

const LogIn = () => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const User = {
      username: username,
      password: password
    };

    await axios.post('http://localhost:5000/login', User, {
      withCredentials: true

    })
      .then((res) => {
        const userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        navigate('/')
      })
      .catch(err => {
        console.log("User not login", err);
      });
  };

  return (
    <>
     <div className="background-image"></div> 
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '400px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Log In</h2>
           
            <form onSubmit={handleSubmit}>
              Username<MDBInput wrapperClass='mb-3' size='lg' id='form1' type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
              Password<MDBInput wrapperClass='mb-3' size='lg' id='form3' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />

              
              <button className='mb-4 w-100 gradient-custom-4'  type="submit" style={{ backgroundColor: '#7e89a9', borderColor: '#7e89a9' }}>Login</button>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      <ScrollToTopButton />


    </>
  )
}

export default LogIn