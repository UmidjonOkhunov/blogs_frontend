import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  return (
    <Collapse in={notification}>
      <div>
        <Alert variant="success">{notification}</Alert>
      </div>
    </Collapse>
  );
};

export default Notification;
