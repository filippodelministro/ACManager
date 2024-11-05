import { useState } from 'react';
import { Form, Button, Alert, Col, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { username, password };

    if (!username) {
      setErrorMessage('Username cannot be empty');
    } else if (!password) {
      setErrorMessage('Password cannot be empty');
    } else {
      props.login(credentials)
        .then(() => navigate("/"))
        .catch((err) => {
          setErrorMessage(err.error);
        });
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Col xs={12} md={6} lg={4}>
        <Card className="shadow-lg p-4 rounded">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            {errorMessage && (
              <Alert dismissible onClose={() => setErrorMessage('')} variant="danger">
                {errorMessage}
              </Alert>
            )}
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser className="me-2" />
                Username
              </Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Form.Group>
            <Button className="w-100 mt-3" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <small className="text-muted">Don't have an account?</small>
            <RegisterButton />
          </div>
        </Card>
      </Col>
    </Container>
  )
}

function RegisterForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for password confirmation
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { username, password };

    if (!username) {
      setErrorMessage('Username cannot be empty!');
    } else if (!password) {
      setErrorMessage('Password cannot be empty');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match'); // Error if passwords do not match
    } else {
      props.register(credentials)
        .then(() => navigate("/"))
        .catch((err) => {
          setErrorMessage(err.error);
        });
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Col xs={12} md={6} lg={4}>
        <Card className="shadow-lg p-4 rounded">
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            {errorMessage && (
              <Alert dismissible onClose={() => setErrorMessage('')} variant="danger">
                {errorMessage}
              </Alert>
            )}
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser className="me-2" />
                Email
              </Form.Label>
              <Form.Control
                type="string"
                value={username}
                placeholder="Enter your email"
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaLock className="me-2" />
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={(ev) => setConfirmPassword(ev.target.value)}
              />
            </Form.Group>
            <Button className="w-100 mt-3" variant="success" type="submit">
              Register
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  )
}

function LogoutButton(props) {
  return (
    <Button variant="outline-light" onClick={props.logout}>Logout</Button>
  )
}

function LoginButton(props) {
  const navigate = useNavigate();
  return (
    <Button variant="outline-light" onClick={() => navigate('/login')}>Login</Button>
  )
}

function RegisterButton(props) {
  const navigate = useNavigate();
  return (
    <Button variant="outline-dark" onClick={() => navigate('/register')}>Register</Button>
  )
}

export { LoginForm, LogoutButton, LoginButton, RegisterButton, RegisterForm };