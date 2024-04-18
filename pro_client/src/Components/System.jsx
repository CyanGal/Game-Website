import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import backgroundimage from '../Images/cardimage1.jpg';
import cardimage1 from '../Images/cardimage2.jpg';
import cardimage2 from '../Images/cardimage3.jpg';
import cardimage3 from '../Images/cardimage4.jpg';
import './SystemStyles.css';
import './CharacterStyles.css';
import ScrollToTopButton from '../Components/ScrollButton/ScrollToTopButton';

 
 
const System = () => { 
  return ( 
    <> 
   <div className="background-image-characters"></div>
<Container>
<Row>
    <div className="card text-bg-dark infocard" >
   
      <img className="card-img" src={cardimage3} alt="Card image"  />
      <div className="card-img-overlay">
        <h5 className="card-titleSystem">Game Mechanincs</h5>
        <p className="card-textSystem">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Repudiandae inventore nobis voluptate culpa nemo, 
          quod ipsa quia dolor minima dolores vitae vero incidunt cumque explicabo possimus! 
          Mollitia, voluptate. Consequuntur, non.
        </p>
      </div>
    </div>
    
    <div className="card text-bg-dark infocard">
    
      <img className="card-img" src={cardimage1} alt="Card image"   />
      <div className="card-img-overlay">
        <h5 className="card-titleSystem">Character Class</h5>
        <p className="card-textSystem">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Repudiandae inventore nobis voluptate culpa nemo, 
          quod ipsa quia dolor minima dolores vitae vero incidunt cumque explicabo possimus! 
          Mollitia, voluptate. Consequuntur, non.
        </p>
      </div>
    </div>
    </Row>

    <Row>
    <div className="card text-bg-dark infocard">
   
   <img className="card-img" src={cardimage2} alt="Card image"  />
   <div className="card-img-overlay">
     <h5 className="card-titleSystem">World Build</h5>
     <p className="card-textSystem">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Repudiandae inventore nobis voluptate culpa nemo, 
       quod ipsa quia dolor minima dolores vitae vero incidunt cumque explicabo possimus! 
       Mollitia, voluptate. Consequuntur, non.
     </p>
   </div>
 </div>
 
 <div className="card text-bg-dark infocard">
 
   <img className="card-img" src={backgroundimage} alt="Card image"  />
   <div className="card-img-overlay">
     <h5 className="card-titleSystem">Categories</h5>
     <p className="card-textSystem">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Repudiandae inventore nobis voluptate culpa nemo, 
       quod ipsa quia dolor minima dolores vitae vero incidunt cumque explicabo possimus! 
       Mollitia, voluptate. Consequuntur, non.
     </p>
   </div>
 </div>

    </Row>
    </Container>
<ScrollToTopButton />
 
    </>
  );
}

export default System;