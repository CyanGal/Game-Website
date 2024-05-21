import React,  { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ReviewsStyles.css';
import ScrollToTopButton from '../ScrollButton/ScrollToTopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown  } from '@fortawesome/free-regular-svg-icons';

import { UserContext } from '../../UserContext';

const Review = ({ _id, review_description, username,  review_title }) => {
    const { userInfo } = useContext(UserContext);
    const loggedInUsername = userInfo.username; 
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);

  const handleYesClick = () => {
    setYesCount(yesCount + 1);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  return ( 
   <>
  
 <Card className='review-card'>
          <div className="column-size-4">
          <div className="card-text-content"> 
      <div className="custom-card flip-card height-100">
        <div className="flip-card-front text-color-white background-color-warning">
          <div className="custom-card-body">
        
            <h3 className="custom-card-title">{review_title} </h3>
           
          </div>
        </div>
        <div className="flip-card-back background-color-dark text-color-white">
          <div className="custom-card-body px-1">
            <p className="custom-card-text">{review_description}</p>
            <p><div>
                      <span>&nbsp;Was this review helpful? </span><br/> <br/>
                      &nbsp;<Button variant="primary" size="sm" className="mr-2" style={{ backgroundColor: '#C6B794', borderColor: '#C6B794' }} onClick={handleYesClick}><FontAwesomeIcon icon={farThumbsUp} /> ({yesCount})</Button> &nbsp; 
                      &nbsp;<Button variant="primary" size="sm" className="mr-2" style={{ backgroundColor: '#C6B794', borderColor: '#C6B794' }} onClick={handleNoClick}><FontAwesomeIcon icon={farThumbsDown} /> ({noCount})</Button>
                  </div></p>
            <div className="find-more-button">
                  &nbsp;<Button variant="primary" style={{ backgroundColor: '#C6B794', borderColor: '#C6B794' }} >
                          <Link className="text-light text-decoration-none" to={`/reviews/${_id}`}>Learn more</Link>
                      </Button>
                  </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </Card>
        


          </>
    
  )
}

export default Review;