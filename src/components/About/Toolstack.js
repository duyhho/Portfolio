import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJavascript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import pythonlogo from "../../Assets/Logos/python.svg";
import cplusplus from "../../Assets/Logos/cplusplus.png";
import csharp from "../../Assets/Logos/csharp.png";
import javalogo from "../../Assets/Logos/javalogo.svg";
import javascriptlogo from "../../Assets/Logos/javascriptlogo.svg";

function Toolstack() {
  return <>
    <h1 className="project-heading">
      <strong className="purple">Programming Languages</strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={javascriptlogo} width={80} className="img-fluid" alt="Javascript" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={cplusplus} width={80} className="img-fluid" alt="C++" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={csharp} width={80} className="img-fluid" alt="C#" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={pythonlogo} width={80} className="img-fluid" alt="python" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={javalogo} width={80} className="img-fluid" alt="Java" />
        </div>
      </Col>

    </Row>
  </>

}

export default Toolstack;
