import React from 'react';
import {Container} from 'react-bootstrap';
import chara1 from './CharacterImages/img10.png';
import chara2 from './CharacterImages/img5.png';
import chara3 from './CharacterImages/img6.png';
import chara4 from './CharacterImages/img7.png';
import chara5 from './CharacterImages/img8.png';
import ScrollToTopButton from '../Components/ScrollButton/ScrollToTopButton';

import './CharacterStyles.css';

const Characters = () => {
  return (
   
    <>
     <div className="background-image-characters"></div>
    <Container className="main-container">
 
    <div className='character-container image-gallery'>

    <div className="box box-1" style={{ backgroundImage: `url(${chara1})` }} data-text="Paladin"></div>
    <div className="box box-2" style={{ backgroundImage: `url(${chara2})` }} data-text="Mage"></div>
    <div className="box box-3" style={{ backgroundImage: `url(${chara3})` }} data-text="Knight"></div>

    <div className="box box-4" style={{ backgroundImage: `url(${chara4})` }} data-text="Pact-Twins"></div>
    <div className="box box-5" style={{ backgroundImage: `url(${chara5})` }} data-text="Rogue"></div>
    <ScrollToTopButton />


    </div>
   
    </Container>
 
    </>
  ) 
}

export default Characters;