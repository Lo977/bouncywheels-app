import React from "react";

function Home() {
  return (
    <div className="home-main">
      {/* <h1>Home Comp</h1> */}
      <main>
        <h3 className="home-title">Welcome to Bouncy Wheels Inventory App</h3>
        <img
          className="home-img"
          src="https://hips.hearstapps.com/hmg-prod/images/14bugatti-divo-99leadgallery-1535035005.jpg?crop=0.824xw:1.00xh;0.109xw,0&resize=768:*"
          alt="exotic-car"
        />
        <p className="home-p">
          Bouncy Wheels Exotic Cars Inventory App is designed to stramline your
          inventory process as ultimate tool for managing luxury car records
          effortlessly to add new cars, delete sold cars from the inventory list
          and update an information in seconds.this app was crated for Flatiron
          school SE phase-2 project{" "}
        </p>
      </main>
    </div>
  );
}

export default Home;
