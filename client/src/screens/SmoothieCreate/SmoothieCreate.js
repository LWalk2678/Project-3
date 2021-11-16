//Terra Claycamp
//Purpose:Sets up create smoothie for user
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useState } from "react";
import "./SmoothieCreate.css";
import { Layout } from "../../components";
import { Redirect } from "react-router-dom";
import { createSmoothie } from "../../services/smoothies";

const SmoothieCreate = (props) => {
  const [smoothie, setSmoothie] = useState({
    name: "",
    description: "",
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
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Name"
          value={smoothie.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          value={smoothie.price}
          name="price"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={smoothie.description}
          name="description"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-ingredients"
          rows={10}
          placeholder="Ingredients"
          value={smoothie.ingredients}
          name="ingredients"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={smoothie.imageURL}
          name="imageURL"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default SmoothieCreate;
