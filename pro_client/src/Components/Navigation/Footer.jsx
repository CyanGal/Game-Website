import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,

} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faFacebook, faFontAwesome, faTwitter, faYoutube);

export default function Footer() {
  return (
    <div style={{paddingTop: '50px'}}> 
        <style>{`
        .icon-white {
          color: white; 
        }
      `}</style>

    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
      
          <button className='m-1' style={{    outline: 'none', border: '2px solid white', borderRadius: '10px', background: 'transparent',cursor: 'pointer', padding: '8px 16px'}}>
        <a href='https://www.facebook.com/granbluefantasyjp' target='_blank' role='button'>
          <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }}  className="fa-bounce" />
        </a>
      </button>

      <button className='m-1' style={{ outline: 'none', border: '2px solid white', borderRadius: '10px', background: 'transparent', cursor: 'pointer', padding: '8px 16px' }}>
        <a href='https://twitter.com/granbluefantasy' target='_blank' role='button'>
          <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} className="fa-bounce" />
        </a>
      </button>

      <button className='m-1' style={{ outline: 'none', border: '2px solid white', borderRadius: '10px', background: 'transparent', cursor: 'pointer', padding: '8px 16px' }}>
        <a href='https://www.youtube.com/watch?v=PYFZM9bksMI&ab_channel=PlayStation' target='_blank' role='button'>
          <FontAwesomeIcon icon={faYoutube} style={{ color: 'white' }} className="fa-bounce" />
        </a>
      </button>

      <button className='m-1' style={{ outline: 'none', border: '2px solid white', borderRadius: '10px', background: 'transparent', cursor: 'pointer', padding: '8px 16px' }}>
        <a href='https://form.cygames.co.jp/en/' target='_blank' role='button'>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} className="fa-bounce" />
        </a>
      </button>

        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
          
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          As I present this webpage, it's important to clarify
           that I do not hold any proprietary claim to the content displayed here.
          The design and<br/> thematic elements of this site are directly drawn from, 
          and a homage to, the video game Granblue Fantasy. <br/>
          All intellectual property rights and creative acknowledgments 
          are hereby attributed to the esteemed creators at Cygames, Inc. <br/>
       
          </p>
        </section>

        <section className=''>
          <MDBRow>
        
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      All rights reserved © Cygames, Inc:  &nbsp; 
        <a className='text-white' href='https://www.cygames.co.jp/'>
           Cygames.com
        </a>
      </div>
    </MDBFooter>
    </div>
    
  );
}
