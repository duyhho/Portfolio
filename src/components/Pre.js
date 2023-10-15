import React from "react";
import { BallTriangle, Bars, Oval, Puff } from "react-loading-icons";
function Pre({ load }) {
  const blueColor = '#4285F4';
  const size = 250;

  // Do not render the component at all when props.load is false
  if (!load) {
    return null;
  }

  return (
    <div id="preloader"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Puff stroke={blueColor} width={size} height={size} />
    </div>
  );
}

export default Pre;
