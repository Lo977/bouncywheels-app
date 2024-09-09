import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { useLocation } from "react-router-dom";

function Cars() {
  const [isCars, setIsCars] = useState([]);
  const [search, setSearch] = useState("");
  // const { state } = useLocation();
  // const { car } = state;
  // console.log(car);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((carsData) => setIsCars(carsData));
  }, []);
  // function handleNewCar(newCar) {
  //   setIsCars([...isCars, newCar]);
  // }
  function handleDelete(param) {
    const deletedCar = isCars.filter((car) => car.id !== param.id);
    setIsCars(deletedCar);
  }
  const filteredCar = isCars.filter((car) =>
    car.make.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <main>
      <hr />
      <div style={{ color: "white" }}>
        Search By Name <br />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* <Profile onUpdate={handleUpdateCar} /> */}
      <ul className="cards">
        {filteredCar.map((car) => {
          return <CarCard key={car.id} car={car} onDelete={handleDelete} />;
        })}
      </ul>{" "}
      {/* <Outlet context={handleNewCar} /> */}
    </main>
  );
}

export default Cars;
