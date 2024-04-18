import React from 'react';
import Card from 'react-bootstrap/Card';
import cardimage1 from '../BackgroundImages/img1.png';
import cardimage from '../BackgroundImages/img4.png';
import './HomeStyles.css';
import ScrollToTopButton from '../Components/ScrollButton/ScrollToTopButton';

const Home = () => {
  return (
    <>  
      <div className="background-image"></div>

      <Card className="home-card card-fade-in" style={{ width: '55%'}}>
        <Card.Img className="home-card-img" variant="left" src={cardimage} alt="Error loading image" />
        <Card.Body className="home-card-body">
          <Card.Title>Welcome to a world of adventure</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Repudiandae inventore nobis voluptate culpa nemo, 
            quod ipsa quia dolor minima dolores. 
            Mollitia, voluptate. Consequuntur, non.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="centered-container">
        <Card className="centered-text card-fade-in">
          <Card.Body>
            <Card.Title>About the game</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
              Impedit laborum temporibus officia pariatur <br></br>
              magni officiis ad ducimus itaque deserunt, commodi, <br></br>
              quibusdam provident est libero quidem excepturi reiciendis, <br></br>
              minima tempora quaerat?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/*<Card className="home-card-reverse card-fade-in" style={{ width: '55%', display: 'flex', flexDirection: 'row-reverse' }}>
        <Card.Img className="home-card-img" variant="right" src={cardimage1} alt="Error loading image" />
        <Card.Body className="home-card-body">
          <Card.Title>A fantastic journey</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Repudiandae inventore nobis voluptate culpa nemo, 
            quod ipsa quia dolor minima dolores. 
            Mollitia, voluptate. Consequuntur, non.
          </Card.Text>
        </Card.Body>
  </Card>*/}
  <div className="home-card-reverse card-fade-in" style={{ width: '55%'}}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">A fantastic journey</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Repudiandae inventore nobis voluptate culpa nemo, 
            quod ipsa quia dolor minima dolores. 
            Mollitia, voluptate. Consequuntur, non.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img className="home-card-img2" variant="right" src={cardimage1} alt="Error loading image" />
        </div>
      </div>
    </div>

      <ScrollToTopButton />
    </>
  );
}

export default Home;
