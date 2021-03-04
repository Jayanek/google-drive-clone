import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../context/authContext";
import { useHistory } from "react-router-dom";
import AuthContainer from "./authContainer";

const Profile = () => {
  const { currentUser, signOut } = useAuth();
  const [error, setError] = useState("");

  const history = useHistory();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser && currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          LogOut
        </Button>
        <Button variant="link" onClick={() => history.push("/")}>
          Cancel
        </Button>
      </div>
    </AuthContainer>
  );
};

export default Profile;
