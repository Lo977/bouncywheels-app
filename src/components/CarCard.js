import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function CarCard({ car, onDelete }) {
  const [isAvailable, setIsAvailable] = useState(false);
  const { id, image, make, model, year, price } = car;
  const navigate = useNavigate();

  function handleDelete() {
    fetch(`http://localhost:3000/cars/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(car));
    // .then(() => navigate(`/cars/${id}`, { state: car }));
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
        {/* <Link to={(`/update-car/${id}`, { state: car })}> */}
        <button onClick={handleNavigate}>Edit</button> {/* </Link> */}
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
