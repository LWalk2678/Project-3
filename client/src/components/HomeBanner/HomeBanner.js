import { Link } from 'react-router-dom';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <h1 className='banner-text'>Smoothies to<br/>brighten your day</h1>
            <button className='viewSmoothie-button'><Link to="/smoothies">View Smoothies</Link></button>
        </div>
    )
}


export default HomeBanner;