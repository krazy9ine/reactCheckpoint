import React from 'react'
import './index.css';
import Card from 'react-bootstrap/Card';
const Cardss = () => {
  return (
    <div>
      <Card className='card' style={{ width: '30rem', height: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardss
