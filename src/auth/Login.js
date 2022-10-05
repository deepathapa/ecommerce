import axios from "axios";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [login,setLogin] = useState([]);

  const getLoginData = async () => {
    const res = await axios.get("http://localhost:4500/api/user/login")
    setLogin(res.data)
    console.log(res);
  }

  useEffect(() => {
    getLoginData();
  },[]);
  return (
    <div className="d-flex justify-content-center  align-items-center py-5">
      <Card style={{ width: '20rem' }} className="p-3">
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
    </Card>
    </div>
    
  )
}

export default Login