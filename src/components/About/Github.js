import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub Activity past 12 months <strong className="purple">(Public Only)</strong>
      </h1>
      <GitHubCalendar
        username="duyhho"
        blockSize={15}
        blockMargin={5}
        color="#4285F4"
        fontSize={16}
      // isPrivate={isPrivate}
      />
    </Row>
  );
}

export default Github;
