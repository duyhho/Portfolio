import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillAndroid } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiUnity,
  SiPytorchlightning,
  SiPytorch,
} from "react-icons/si";
import { TbBrandGolang, TbBrandUnity } from "react-icons/tb";
import nodeJS from "../../Assets/Logos/nodejs.svg";
import reactlogo from "../../Assets/Logos/react-logo.svg";
import firebaseLogo from "../../Assets/Logos/firebase.svg";
import reactnativelogo from "../../Assets/Logos/react-native-logo.png";
import androidlogo from "../../Assets/Logos/android.svg";
import tensorflowlogo from "../../Assets/Logos/tensorflow.svg";
import blenderlogo from "../../Assets/Logos/blender_logo.png";
import googlecloudlogo from "../../Assets/Logos/googlecloud.png";
import jupyterlogo from "../../Assets/Logos/jupyterlogo.svg";




function Techstack() {
  return <>
    <h1 className="project-heading">
      My <strong className="purple">Knowledge </strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity style={{ marginBottom: 8 }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={reactlogo} width={80} className="img-fluid" alt="react" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={reactnativelogo} width={80} className="img-fluid" alt="react native" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-7px)' }}>
          <img src={androidlogo} width={80} className="img-fluid" alt="android studio" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiNodejs style={{ marginBottom: 10 }} /> */}
        <div style={{ transform: 'translateY(-3px)' }}>
          <img src={nodeJS} width={80} className="img-fluid" alt="nodeJS" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-3px)' }}>
          <svg
            width="55px"
            height="55px"
            viewBox="-27 10 310 310"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M218.281037,90.106412 C268.572988,140.398363 268.572988,221.075034 218.281037,271.716235 C169.036835,322.008186 88.0109141,322.008186 37.7189632,271.716235 C-12.5729877,221.424284 -12.5729877,140.398363 37.7189632,90.106412 L127.825375,0 L127.825375,45.053206 L119.443383,53.4351978 L59.7216917,113.156889 C22.0027285,150.177353 22.0027285,210.946794 59.7216917,248.665757 C96.7421555,286.38472 157.511596,286.38472 195.230559,248.665757 C232.949523,211.645293 232.949523,150.875853 195.230559,113.156889 L218.281037,90.106412 Z M173.227831,84.5184175 C163.969338,84.5184175 156.463847,77.0129263 156.463847,67.7544338 C156.463847,58.4959413 163.969338,50.9904502 173.227831,50.9904502 C182.486323,50.9904502 189.991814,58.4959413 189.991814,67.7544338 C189.991814,77.0129263 182.486323,84.5184175 173.227831,84.5184175 Z"
                fill="#EE4C2C"
              />
            </g>
          </svg>
        </div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-7px)' }}>
          <img src={tensorflowlogo} width={80} className="img-fluid" alt="tensorflow" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-7px)' }}>
          <img src={blenderlogo} width={180} className="img-fluid" alt="blender" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-7px)' }}>
          <img src={googlecloudlogo} width={110} className="img-fluid" alt="Google Cloud Platform" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-7px)' }}>
          <img src={jupyterlogo} width={80} className="img-fluid" alt="Jupyter" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ transform: 'translateY(-5px)' }}>
          <img src={firebaseLogo} width={80} className="img-fluid" alt="nodeJS" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  </>


}

export default Techstack;
