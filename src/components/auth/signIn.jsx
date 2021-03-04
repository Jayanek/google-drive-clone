import React, { useRef, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Card, Alert, Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import AuthContainer from "./authContainer";

const SignIn = () => {
  const { signIn } = useAuth();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await signIn(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("unable to log in");
    }
  };

  return (
    <AuthContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Create new an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Forgot Password? <Link to="/forgot-password">Rest Password</Link>
      </div>
    </AuthContainer>
  );
};

export default SignIn;
