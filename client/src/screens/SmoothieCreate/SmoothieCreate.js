//Terra Claycamp
//Purpose:Sets up create smoothie for user
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useState } from "react";
import "./SmoothieCreate.css";
import { Layout } from "../../components";
import { Redirect } from "react-router-dom";
import { createSmoothie } from "../../services/smoothies";
import "./SmoothieCreate.css";

const SmoothieCreate = (props) => {
  const [smoothie, setSmoothie] = useState({
    title: "",
    description: "",
    ingredients: "",
    imageURL: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSmoothie({
      ...smoothie,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createSmoothie(smoothie);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/smoothies`} />;
  }
  return (
    <Layout user={props.user}>
      <div className='create-container'>
      <img className="blender" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZiobP8V41RlokB4oHGzlOKye7_W78zQb-dRryis6uSe2YOBI" alt='empty blender'/>
      <form className="create-form" onSubmit={handleSubmit}>
        <h1>Create Your Own Smoothie!</h1>
        <label>Smoothie Title:</label>
        <input
          className="input-title"
          placeholder="Name your Smoothie"
          value={smoothie.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          className="input-price"
          placeholder="Price"
          value={smoothie.price}
          name="price"
          required
          onChange={handleChange}
        />
        <label>Description:</label>
        <textarea
          className="textarea-description"
          rows={4}
          placeholder="Description"
          value={smoothie.description}
          name="description"
          required
          onChange={handleChange}
        />
        <label>Ingredients:</label>
        <textarea
          className="textarea-ingredients"
          rows={4}
          placeholder="Type each ingredient separated by a comma."
          value={smoothie.ingredients}
          name="ingredients"
          required
          onChange={handleChange}
        />
        <label>URL:</label>
        <input
          className="input-image-link"
          placeholder="Paste your image link here"
          value={smoothie.imageURL}
          name="imageURL"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      </div>
      
    </Layout>
  );
};

export default SmoothieCreate;
