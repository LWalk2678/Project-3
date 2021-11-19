import "./HomeSmoothie.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from "react";
import { getSmoothies } from "../../services/smoothies";


const HomeSmoothie = () => {
    const [smoothies, setSmoothies] = useState();

    useEffect(() => {

        const getMonthSmoothie = async () => {
            const allSmoothies = await getSmoothies()
            setSmoothies(allSmoothies);
        }
        getMonthSmoothie();
    }, [])



    return (
        <div className='home-smoothie'>
            <h1>Smoothie of the Month</h1>
            <div className='home-smoothie-container'>
                <div className='highlight-container' >
                    <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829465-pb-j.jpg" alt='pb&j smoothie'/>
                    <h1 className='smoothie-title'>PB&J Blast</h1>
                    <p></p>
                </div>

                <div className='quote-button-container' >
                    <h3>"It's peanut butter, jelly, and your entire childhood in one smoothie!</h3>
                    {smoothies ? 
                    <button><Link className='link' to={`smoothies/${smoothies[1]._id}`}>View Smoothie</Link></button>
                    :
                    null }

                </div>
            </div>
        </div>
    )
}

export default HomeSmoothie;