import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

function UpdateCar() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    image: "",
    year: "",
    price: 0,
  });
  //   const { state } = useLocation();
  const navigate = useNavigate();
  const { handleUpdate } = useOutletContext();
  //   const { id, image, make, model, year, price } = state;
  const carId = useParams();
  //   console.log(carId);

  function handleOnchange(e) {
    const key = e.target.name;
    setFormData({ ...formData, [key]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/cars/${carId.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((carData) => handleUpdate(carData));
    navigate("/cars");
  }

  //   const imagePreview = formData.image !== "" ? formData.image : image;
  return (
    <div className="new-car-form">
      {/* <img style={{ width: "300px" }} src={imagePreview} alt={make} /> */}
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
