import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function CarCard({ car }) {
  const [isAvailable, setIsAvailable] = useState(false);
  const { id, image, make, model, year, price } = car;
  const navigate = useNavigate();
  const { handleCarDelete } = useOutletContext();

  function handleDelete() {
    fetch(`http://localhost:3000/cars/${id}`, {
      method: "DELETE",
    }).then(() => handleCarDelete(car));
  }
  function handleNavigate() {
    navigate(`/update-car/${id}`, { state: car });
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">
          {year}
          {"  "}
          {make}
          {"  "}
          {model}
        </span>
        <img src={image} alt={make} />
      </div>
      <p style={{ color: "white" }}>
        Price : <strong style={{ color: "lightgreen" }}> $ {price}</strong>
      </p>
      <div className="details">
        <button onClick={handleNavigate}>Edit</button>
        <button className="emoji-button delete" onClick={handleDelete}>
          Delete
        </button>
        <button
          onClick={() => setIsAvailable(!isAvailable)}
          style={{ color: isAvailable ? "green" : "red" }}
        >
          {isAvailable ? "Available" : "Sold"}
        </button>
      </div>
      {/* <Outlet /> */}
    </li>
  );
}

export default CarCard;
