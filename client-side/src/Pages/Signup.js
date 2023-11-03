import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from '../apiConfig';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    displayName: '',
    password: '',
    reEnterPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.reEnterPassword) {
      toast.error("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, formData);
      console.log(response.data.message);
      toast.success(response.data.message);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error(error.response ? error.response.data.error : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToSignIn = () => {
    navigate('/');
  };

  return (
    <Container className="main-signup">
      <Row className="justify-content-center h-100">
        <Col xs={12} sm={8} md={6}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h2 className="text-center">Sign Up</h2>
              <Form onSubmit={handleSignup}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="displayName"
                    placeholder="Display Name"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="reEnterPassword"
                    placeholder="Re-enter Password"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing Up...' : 'Sign Up'}
                </Button>
              </Form>

              <p className="text-center mt-3">
                If you already have an account,{' '}
                <span
                  onClick={navigateToSignIn}
                  style={{ cursor: 'pointer', color: 'blue' }}
                >
                  click here to Login
                </span>
                .
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default Signup;
