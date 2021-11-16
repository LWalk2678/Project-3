//Terra Claycamp
//Purpose:
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import "./SmoothieCard.css";
import { Link } from "react-router-dom";

const SmoothieCard = (props) => {
  return (
    <div className="smoothie-card">
      <Link className="card" to={`/smoothies/${props._id}`}>
        <img
          className="smoothie-card-image"
          src={props.imgURL}
          alt={props.name}
        />
        <div>View</div>
      </Link>
    </div>
  );
};

export default SmoothieCard;