import React, { useRef, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Card, Alert, Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import AuthContainer from "./authContainer";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const emailRef = useRef("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await resetPassword(emailRef.current.value);
      history.push("/login");
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
            <Button className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Cancel</Link>
      </div>
    </AuthContainer>
  );
};

export default ForgotPassword;
