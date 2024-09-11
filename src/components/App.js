import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((carsData) => setCars(carsData));
  }, []);
  // console.log(cars);
  function handleCarDelete(carData) {
    const deletedCar = cars.filter((car) => car.id !== carData.id);
    setCars(deletedCar);
  }
  function handleNewCar(newCar) {
    setCars([...cars, newCar]);
  }
  function handleUpdate(carData) {
    const updatedCar = cars.map((car) =>
      car.id === carData.id ? carData : car
    );
    setCars(updatedCar);
  }
  return (
    <div>
      <div className="main-title">
        <h3>Bouncy Wheels </h3>
        <header>
          <NavBar />
        </header>
      </div>
      <Outlet context={{ cars, handleNewCar, handleCarDelete, handleUpdate }} />
    </div>
  );
}

export default App;
