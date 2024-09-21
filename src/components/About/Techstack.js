import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>JavaScript</p>
      </Col>

      {/* Front-end Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>React</p>
      </Col>

      {/* Back-end Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>MongoDB</p>
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ marginTop: "10px", fontSize: "0.2em" }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
