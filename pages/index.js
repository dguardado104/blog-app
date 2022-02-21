import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Container, Row, Col, Nav, FloatingLabel, Form, Control  } from 'react-bootstrap';

export default function Home() {

  const [form, setForm] = useState({
    title: "",
    body: "",
    autor: "",
    createdAt: ""
  });

  const handleChange = e => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value
    });

  }

  const addPost = () => {
    if(form.title && form.body && form.autor){
      
      form.createdAt = new Date;

      setForm({...form});
      
      console.log(form);
    }else{
      alert("Completar los campos obligatorios!")
    }
  }

  const formatDate = (postDate) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(postDate);

    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }

  return (
    <div>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Link href='/' passHref>
            <Nav.Link>Blog</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link href='/order-form' passHref>
            <Nav.Link>Order Form</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link href='/login' passHref>
            <Nav.Link>Login</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
      <Container>
        <Row>
          <Col>
            <h2>The Blog</h2>
            
            <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
              <Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Body" className="mb-3">
            <Form.Control as="textarea" name="body" cols="30" rows="10" placeholder="Write something..." onChange={handleChange} style={{ height: '100px' }}></Form.Control>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Autor" className="mb-3">
              <Form.Control type="text" placeholder="Autor" name="autor" onChange={handleChange} />
            </FloatingLabel>

            <Button onClick={addPost}>Add Post</Button>
          </Col>
        </Row>
      
      </Container>
    </div>
  )
}
