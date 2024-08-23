import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landingpage() {
  return (
   <>
   <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
    <Row>
      <Col>
      <h3 className='text-style'>Welcome To <span className='text-warning'>Media Player</span></h3>
      <p className='text-style' style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolor expedita consequatur sunt ipsam minus esse aperiam aspernatur labore rem cumque dolorem similique inventore nemo, dolores maxime consequuntur voluptatibus quibusdam!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolor expedita consequatur sunt ipsam minus esse aperiam aspernatur labore rem cumque dolorem similique inventore nemo, dolores maxime consequuntur voluptatibus quibusdam!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolor expedita consequatur sunt ipsam minus esse aperiam aspernatur labore rem cumque dolorem similique inventore nemo, dolores maxime consequuntur voluptatibus quibusdam!</p>
      <Link to='/home'>
      <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
      </Link>
      </Col>
      <Col>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="music-beat" className='ms-5' height={'400px'} />
      </Col>
   
    </Row>

   </Container>
   <div className='container mt-5 mb-5'>
    <h3 className='text-style mb-5'>Features</h3>
    <div className='cards d-flex align-items-center justify-content-evenly'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={'250px'} />
      <Card.Body className='bg-dark'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='text-style'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" height={'250px'} />
      <Card.Body className='bg-dark'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='text-style'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={'250px'} />
      <Card.Body className='bg-dark'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='text-style'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>

   </div>

   <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
    <Row>
      <Col>
      <h3 className='text-style mb-3'><span className='text-warning'>Simple and Powerful</span></h3>
      <p className='text-style'><span className='fs-5 fw-bolder'>Play everything : </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempora nihil, ipsam distinctio accusantium delectus ea, molestiae corrupti dolorem obcaecati blanditiis perspiciatis soluta culpa totam nesciunt? Accusantium debitis consequuntur dicta.</p>
      <p className='text-style'><span className='fs-5 fw-bolder'>Play everything : </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempora nihil, ipsam distinctio accusantium delectus ea, molestiae corrupti dolorem obcaecati blanditiis perspiciatis soluta culpa totam nesciunt? Accusantium debitis consequuntur dicta.</p>
      <p className='text-style'><span className='fs-5 fw-bolder'>Play everything : </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempora nihil, ipsam distinctio accusantium delectus ea, molestiae corrupti dolorem obcaecati blanditiis perspiciatis soluta culpa totam nesciunt? Accusantium debitis consequuntur dicta.</p>
      </Col>
      <Col>
      <div className='mt-5'>
      <iframe width="600" height="350" src="https://www.youtube.com/embed/3weba0nP4fg" title="New 2024 Playlist Of Hillsong Songs Playlist 🙏HILLSONG Praise Music 2024 | Goodness Of God" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </Col>
    </Row>

   </div>
   </>
  )
}

export default Landingpage