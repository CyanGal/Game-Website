import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../HomeStyles.css'
 import  ScrollToTopButton  from '../ScrollButton/ScrollToTopButton';

import {
  
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput, 
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username: username,
      email: email,
      password: password
    }
  
    if (password === rePassword) {
   
      await axios.post('http://localhost:5000/signup', newUser)
        .then((res) => {
          console.log(res.data)
          navigate('/login/')
        })
        .catch(err => { console.log("User not added" + err) })
    } else {
      console.log("wrong password")
    } 


  }
  return (
    <>
     <div className="background-image"></div>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className="row-12 row-md-8 row-lg-6" style={{ marginTop: '50px' }}>
        <div className="col">

          <MDBCard className='mx-auto my-5' style={{ maxWidth: '450px' }}>
            <MDBCardBody className='px-4'>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              
              <form onSubmit={handleSubmit}>
               
                Username<MDBInput wrapperClass='mb-3' size='sm' id='form1' type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
                Email<MDBInput wrapperClass='mb-3' size='sm' id='form2' type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                Password <MDBInput wrapperClass='mb-3'size='sm' id='form3' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}
                  value={password} />
                Confirm password<MDBInput wrapperClass='mb-3' size='sm' id='form4' type='password' placeholder='confirm password' onChange={(e) => setRePassword(e.target.value)}
                  value={rePassword} />
                <div className='d-flex flex-row justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                </div>
                <button className='mb-4 w-100 gradient-custom-4'  type="submit" style={{ backgroundColor: '#7e89a9', borderColor: '#7e89a9' }}>Register</button>
                
              </form>
            </MDBCardBody>
          </MDBCard>

        </div>
      </div>
    </MDBContainer>
    <ScrollToTopButton />
    </>
  );
}

export default SignUp;
