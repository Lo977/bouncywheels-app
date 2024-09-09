import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateCar() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id, image, make, model, year, price } = state;

  const [formData, setFormData] = useState({
    make: make,
    model: model,
    image: image,
    year: year,
    price: price,
  });

  function handleOnchange(e) {
    const key = e.target.name;
    setFormData({ ...formData, [key]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submited");
    fetch(`http://localhost:3000/cars/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    //     return console.log(data);
    navigate("/cars");
    //   });
  }

  //   console.logs(make);
  const imagePreview = formData.image !== "" ? formData.image : image;
  return (
    <div className="new-car-form">
      <img style={{ width: "300px" }} src={imagePreview} alt={make} />
      <div>
        <form onSubmit={handleSubmit}>
          Make
          <input
            type="text"
            value={formData.make}
            name="make"
            onChange={handleOnchange}
          />
          <br />
          Model
          <input
            type="text"
            value={formData.model}
            name="model"
            onChange={handleOnchange}
          />
          <br /> Image Url
          <input
            type="text"
            value={formData.image}
            name="image"
            onChange={handleOnchange}
          />
          <br /> year
          <input
            type="text"
            value={formData.year}
            name="year"
            onChange={handleOnchange}
          />{" "}
          <br />
          Price
          <input
            type="number"
            value={formData.price}
            name="price"
            onChange={handleOnchange}
          />{" "}
          <br />
          <button type="submit" className="sub-btn" s>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCar;
