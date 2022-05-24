import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div class="absCenter ">
      <div class="loaderPill">
        <div class="loaderPill-anim">
          <div class="loaderPill-anim-bounce">
            <div class="loaderPill-anim-flop">
              <div class="loaderPill-pill"></div>
            </div>
          </div>
        </div>
        <div class="loaderPill-floor">
          <div class="loaderPill-floor-shadow"></div>
        </div>
        <div class="loaderPill-text">Loading E-MEDIC</div>
      </div>
    </div>
  );
};

export default Loading;
