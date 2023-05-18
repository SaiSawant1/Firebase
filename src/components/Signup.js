import React from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import { Link } from "react-router-dom";

const Signup = () => {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const passwordConfirmRef = React.useRef();
    const [error, setError] = React.useState("");
    const [loading,setLoading]=React.useState(false)
    const { signup} = useAuth();
    const handleSubmit = async(e) => {
        e.preventDefault();
  
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
          return setError("Passwords do not match")
        }
        try {
          setError("");
          setLoading(true);
          await signup(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
          setError(error.message);
        }
        setLoading(false)
    }
  
    return (
      <>
       
        <Card>
        <Card.Body>
            <h2 className="text-center mb-2">Sign up</h2>
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
  
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} type="submit" onClick={handleSubmit} className="w-100">
                Sign up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          already have an account? <Link to="/login">login</Link>
        </div>
      </>
    );
};

export default Signup;
