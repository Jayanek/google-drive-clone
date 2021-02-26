import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
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
    <>
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
      </div>
    </>
  );
};

export default Dashboard;
