import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function NewCar() {
  const [newCarData, SetNewCarData] = useState({
    make: "",
    model: "",
    image: "",
    year: "",
    price: 0,
    isAvailable: true,
  });
  const navigate = useNavigate();
  const { handleNewCar } = useOutletContext();

  // console.log(handleNewCar);

  function handleOnChange(e) {
    const key = e.target.name;
    SetNewCarData({ ...newCarData, [key]: e.target.value });
  }
  //   console.log(newCarData);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newCarData),
    })
      .then((res) => res.json())
      .then((newCar) => {
        handleNewCar(newCar);
        navigate("/cars");
      });
  }
  return (
    <div className="new-car-form">
      <div>
        <form onSubmit={handleSubmit}>
          Make
          <input
            type="text"
            value={newCarData.make}
            name="make"
            onChange={handleOnChange}
          />
          <br />
          Model
          <input
            type="text"
            value={newCarData.model}
            name="model"
            onChange={handleOnChange}
          />
          <br /> Image Url
          <input
            type="text"
            value={newCarData.image}
            name="image"
            onChange={handleOnChange}
          />
          <br /> year
          <input
            type="text"
            value={newCarData.year}
            name="year"
            onChange={handleOnChange}
          />{" "}
          <br />
          Price
          <input
            type="number"
            value={newCarData.price}
            name="price"
            onChange={handleOnChange}
          />{" "}
          <br />
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </div>
      {/* {/* <Outlet /> */}
      <div className="preview">
        <img src={newCarData.image} />
        <h4>Make :{newCarData.make}</h4>
        <h4>Model:{newCarData.model}</h4>
        <h4>Year : {newCarData.year}</h4>
        <h4>Price: $ {newCarData.price}</h4>
      </div>
    </div>
  );
}

export default NewCar;
