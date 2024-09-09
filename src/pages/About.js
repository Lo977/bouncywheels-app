import React from "react";

function About() {
  return (
    <div className="about">
      <h3>About Us</h3>
      <p className="about-p0">
        {" "}
        The Bouncy Wheels Exotic Cars Inventory app is designed to simplify the
        management of high-end car collection.Whether you're adding new arrivals
        ,updating details or removing sold vehicles, this app offers a seamless
        solution to track your exotic car inventory.Built with precision and
        reliability following a unique software development .its tailored for
        luxury car dealerships and enthusiasts alike.
      </p>
      <p className="about-p1">
        <span style={{ fontWeight: "bold" }}>App Created By:</span>
        <br />
        Name: Buddha Lo <br />
        Flatiron SE Student <br />
        <span style={{ fontWeight: "bold" }}>
          Created For Phase-2 React Project
        </span>
      </p>
    </div>
  );
}

export default About;
