import './Smoothie.css';
import { Link } from 'react-router-dom'

const Smoothie = (props)=> {
    return (
        <div>
            <Link className="smoothie" to={`/smoothies/${props._id}`}>
                <img className="smoothie-image" src={props.imageURL} alt={props.title} />
                <div className="smoothie-title">{props.title}</div>
                <div className="price">{`$${props.price}`}</div>
            </Link>
        </div>
    )
}
export default Smoothie