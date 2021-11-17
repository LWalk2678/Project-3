import './HomeNutrition.css'

const factOne = (
    <div className="health-benefits">
        <div className="health-image-title">
            <img src="https://th-thumbnailer.cdn-si-edu.com/4Nq8HbTKgX6djk07DqHqRsRuFq0=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg" className="nutrition-images" alt="banana"/>
            <h3>banana</h3>
        </div>
        <ul>
            <li>High potassium to help improve heart health</li>
            <li>High fiber to support weight loss</li>
            <li>Helps improve blood sugar levels</li>
        </ul>
    </div>
)
const factTwo = (
    <div className="health-benefits">
        <div className="health-image-title">
            <img src="https://images.heb.com/is/image/HEBGrocery/001945935" className="nutrition-images" alt="pineapple"/>
            <h3>pineapple</h3>
        </div>
        <ul>
            <li>Disease-fighitng antioxidants</li>
            <li>Digestive easing enzymes</li>
            <li>Loaded with nutrients</li>
        </ul>
    </div>
)
const factThree = (
    <div className="health-benefits">
        <div className="health-image-title">
            <img src="https://www.freshpoint.com/wp-content/uploads/commodity-blueberry.jpg" className="nutrition-images" alt="blueberry"/>
            <h3>blueberry</h3>
        </div>
        <ul>
            <li>Brain health improvement</li>
            <li>Compounds to support blood sugar control </li>
            <li>Inhibits LDL to help heart health</li>
        </ul>
    </div>
)
const factFour = (
    <div className="health-benefits">
        <div className="health-image-title">
            <img src="https://solidstarts.com/wp-content/uploads/introducing-strawberries-to-babies.jpg" className="nutrition-images" alt="strawberry"/>
            <h3>strawberry</h3>
        </div>
        <ul>
            <li>Inhibit tumor formation to prevent Cancer</li>
            <li>Slows down glucose digestion to regulate blood sugar</li>
            <li>reduce inflammation</li>
        </ul>
    </div>
)


const HomeNutrition = () => {

    return(
        <div className="home-nutrition">
            <div className="nutrition-title">
                <h2>Fruit Punch <span>&#128074;</span></h2>
                <h3>The Powers of fruit</h3>
            </div>
            <div className="facts">
                {factOne}
                {factTwo}
                {factThree}
                {factFour}

            </div>
        </div>
    )
}

export default HomeNutrition