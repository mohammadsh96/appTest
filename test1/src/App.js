import React, { useState  , useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function App() {
   
  
  const [value , setState]= useState("clickMe"); 
  
  
function handleClick1(){

setState("clickMe")

}

  function handleClick(){
    
setState("dontClick");

alert ("dont click again") ;

  }
  return (
    <>
    <input  value={"it is not working yet"}></input>
    <label typeof='text'  alt="your name" >Click Here</label>
    <button class='click' onClick={handleClick}> {value} </button> 
    <span> {value}   </span>
    <button class='submit' type='submit' onClick={handleClick1}  > submit</button>
    
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t39.30808-6/239497497_4006724572771008_4538407019550156009_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeGytFsuKrkbNcI0-KMpH1dJ5qGjeicDvYHmoaN6JwO9gblfMF24jxpQ6zqL2BNU_CTTilj1lVAfc24tYXgfGBXn&_nc_ohc=3hnp05Z_2aQAX8GiXhY&_nc_zt=23&_nc_ht=scontent.famm2-3.fna&oh=00_AT9S8OpY8Yb4XMZ1QjXWGrfaTFn-nj-n_P9CoRzXAtBwZg&oe=6289649A" />
  <Card.Body>
    <Card.Title>About Me :</Card.Title>
    <Card.Text>
     My Name Is Mohammad ALshraideh I was porn In jordan i MAY 1996, I am softWare developer frontEnd / BackEnd 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://web.facebook.com/abu.nasser.sh">FACEBOOK</Card.Link>
    <Card.Link href="https://www.instagram.com/m___n_sh/">INSTAGRAM</Card.Link>
  </Card.Body>
</Card>
    </>
  );
}

export default App;
