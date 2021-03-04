import React from "react";
import { Container } from "react-bootstrap";
import AddFolderButton from "./addFolderButton";
import NavBarComponent from "./navBarComponent";

const Dashboard = () => {
  return (
    <>
      <NavBarComponent />
      <Container fluid>
        <AddFolderButton />
      </Container>
    </>
  );
};

export default Dashboard;
