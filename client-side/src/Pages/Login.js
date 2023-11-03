import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true); 

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, formData);
      console.log('Login Response:', response.data);
      toast.success(response.data.message);

      localStorage.setItem('token', response.data.token);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response ? error.response.data.error : 'An error occurred');
      console.error('Login Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="main-login">
      <Row className="justify-content-center h-100">
        <Col xs={12} sm={8} md={6}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h2 className="text-center">Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    autofill={true}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      autofill={true}
                      onChange={handleInputChange}
                      required
                    />
                    <span
                      style={{ cursor: 'pointer', color: 'blue' }}
                      className="input-group-text password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </span>
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'} 
                </Button>
              </Form>

              <p className="text-center mt-3">
                Don't have an account?{' '}
                <Link to="/register">Register here</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default Login;
