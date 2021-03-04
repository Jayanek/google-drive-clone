import React, { useRef, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Card, Alert, Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import AuthContainer from "./authContainer";

const SignUp = () => {
  const { signUp } = useAuth();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        setError("Passwords not match!");
      } else {
        setError("");
        await signUp(emailRef.current.value, passwordRef.current.value);
        history.push("/");
      }
    } catch {
      setError("unable to sign up");
    }
  };

  return (
    <AuthContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </AuthContainer>
  );
};

export default SignUp;
