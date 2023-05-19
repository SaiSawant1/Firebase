import React from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from './context/AuthContext';
import { Link } from 'react-router-dom';

const PasswordRest = () => {
    const emailRef = React.useRef();
    const [error, setError] = React.useState("");
    const [loading,setLoading]=React.useState(false)
    const [emailSent,setEmailSent]=React.useState(false)
    const { resetPassword} = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          setError("");
          setLoading(true);
          await resetPassword(emailRef.current.value);
          setEmailSent(true)

        } catch (error) {
          setError(error.message);
        }
        setLoading(false)
    }
  
  return (
    <>
       
        <Card>
        <Card.Body>
            <h2 className="text-center mb-2">Reset Password</h2>
            {error&& <Alert variant="danger">{error}</Alert>}
            {emailSent&&<Alert variant="success">Email sent</Alert>}
            {}
            <Form>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button  disabled={loading} type="submit" onClick={handleSubmit} className="w-100 mt-3">
                Reset Password
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Create new account? <Link to="/signup">Sign Up</Link>
        </div>
      </>
  )
}

export default PasswordRest