import React from "react";
import web from "../src/Images/img2.png";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
