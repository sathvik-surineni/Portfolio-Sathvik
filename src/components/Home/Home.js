import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import HeroBgAnimation from "./HeroBgAnimation";
import './Home.css';
import ContactUs from "../ContactUs/ContactUs";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sathvik Teja Surineni</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}>
  {/* Background Animation */}
  <div className="z-0">
    <HeroBgAnimation />
  </div>
  <div className="hero-container">
      <div className="gradient-background"></div>
      <img
  src={homeLogo}
  className="hero-image"
  alt="" // No description needed for decorative images
/>
    </div>
</Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ContactUs/>
    </section>
  );
}

export default Home;
