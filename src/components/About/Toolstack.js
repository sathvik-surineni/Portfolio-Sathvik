import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiWordpress,
  SiAnaconda,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ marginTop: "10px",fontSize:"0.2em" }}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ marginTop: "10px",fontSize:"0.2em" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p style={{ marginTop: "10px",fontSize:"0.2em" }}>Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <p style={{ marginTop: "10px",fontSize:"0.2em" }}>WordPress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <p style={{ marginTop: "10px",fontSize:"0.2em" }}>Anaconda</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
