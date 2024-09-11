import React, { useState } from "react";
import CarCard from "../components/CarCard";
import { useOutletContext } from "react-router-dom";

function Cars() {
  const [search, setSearch] = useState("");
  const { cars } = useOutletContext();

  const filteredCar = cars.filter((car) =>
    car.make.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <main>
      <hr />
      <div style={{ color: "white", marginLeft: "11%" }}>
        Search By Name <br />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="cards">
        {filteredCar.map((car) => {
          return <CarCard key={car.id} car={car} />;
        })}
      </ul>{" "}
    </main>
  );
}

export default Cars;
