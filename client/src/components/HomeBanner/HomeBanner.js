import { Link } from 'react-router-dom';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <h1>Smoothies to<br/>brighten your day</h1>
            <button><Link className='link' to="/smoothies">View Smoothies</Link></button>
        </div>
    )
}


export default HomeBanner;