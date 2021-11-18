import "./HomeSmoothie.css";
import { Link } from 'react-router-dom';

const HomeSmoothie = () => {
    return (
        <div className='home-smoothie'>
            <h1>Smoothie of the Month</h1>
            <div className='home-smoothie-container'>
                <div className='highlight-container' >
                    <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829465-pb-j.jpg" alt='pb&j smoothie'/>
                    <h1 className='smoothie-title'>PB&J Blast</h1>
                </div>

                <div className='quote-button-container' >
                    <h3>"It's peanut butter, jelly, and your entire childhood in one smoothie!</h3>
                    <button><Link className='link' to="smoothies/61968761bc598a48fae80cc2">View Smoothie</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomeSmoothie;