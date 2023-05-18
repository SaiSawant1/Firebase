import React from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from './context/AuthContext';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const [error, setError] = React.useState("");
    const [loading,setLoading]=React.useState(false)
    const { login} = useAuth();
    const navigate=useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          setError("");
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);
          navigate("/")
        } catch (error) {
          setError(error.message);
        }
        setLoading(false)
    }
  
  
    return (
      <>
       
        <Card>
        <Card.Body>
            <h2 className="text-center mb-2">Log In</h2>
            {error&& <Alert variant="danger">{error}</Alert>}
            <Form>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
  
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button  disabled={loading} type="submit" onClick={handleSubmit} className="w-100 mt-3">
                Login in
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Create new account? <Link to="/signup">Sign Up</Link>
        </div>
      </>
    );
}

export default Login
