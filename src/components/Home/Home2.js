import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar3.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt tiltReverse>
              <img src={myImg} width={300} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A FRIENDLY <span className="purple"> INTRODUCTION</span>
            </h1>
            <p className="home-about-body">
              I am currently a Ph.D candicate majoring in Computer Science at the
              <span className="purple"><a href="https://sse.umkc.edu/"
                target="_blank"
                rel="noreferrer"> University of Missouri-Kansas City</a></span>.
              <br />
              <br />Throughout my academic career, I have grown my interests, developed my skills,
              and specialized in
              <span className="purple"> Data Science, Artificial Intelligence, Deep Learning, and Robotics</span>.
              I have worked on many research projects that focused on
              <i>
                <b className="purple"> Object Detection/Image Segmentation, Reinforcement/Imitation Learning, AI-Empowered Robotics, </b> and
                <b className="purple"> Augmented/Virtual/Mixed Reality. </b>
              </i>
              <br />
              <br />
              In addition to research, I have gained experience through practical projects and prepared teaching materials in areas including
              <b className="purple"> 3D modeling, 3D simulation, Web and Mobile Development, Smart Connected Communities </b> and
              <b className="purple"> AI for Cybersecurity</b>.

            </p>
          </Col>

        </Row>
        <Techstack />
        <Toolstack />
        <Github />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect!</h1>

            <p style={{ margin: 0 }}>dhh3hb@umsystem.edu</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/duyhho"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="ai ai-google-scholar-square" style={{ transform: 'translateY(2px)' }}></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container >
  );
}
export default Home2;
