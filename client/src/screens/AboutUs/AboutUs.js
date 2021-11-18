import './AboutUs.css'
import { Layout } from "../../components";

const Team = (
    <div>
        <div className="team-one">
            
            <img src="https://i.imgur.com/y8cYLSa.jpg" className="aboutUs-image-left"/>
            <div className="title-info">
                <h3 className="titleOne">Jeffrey Bailey</h3>
            
                <p>Godfather ipsum dolor sit amet. Friends and money - oil and water. Your enemies always get strong on what you leave behind. My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer. It's a Sicilian message. It means Luca Brasi sleeps with the fishes. Do me this favor. I won't forget it. Ask your friends in the neighborhood about me. They'll tell you I know how to return a favor</p>
            </div>
        </div>
        <div className="team-two">
            <div className="title-info">
                <h3 className="titleTwo">Terra Claycamp</h3>
                <p>I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. I want your answer and the money by noon tomorrow. And one more thing. Don't you contact me again, ever. From now on, you deal with Turnbull. I see you took the name of the town. What was your father's name? Fredo, you're my older brother, and I love you. But don't ever take sides with anyone against the Family again. Ever. I don't feel I have to wipe everybody out, Tom. Just my enemies.</p>
            </div>
                <img src="https://i.imgur.com/JvLCSj6.jpg" className="aboutUs-image-right"/>
        </div>
        <div className="team-one">
            <img src="https://i.imgur.com/OYGL0a5.jpg" className="aboutUs-image-left"/>
            <div className="title-info">
                <h3 className="titleOne">Julia Dwyer</h3>
                <p>Just when I thought I was out... they pull me back in. Hey, listen, I want somebody good - and I mean very good - to plant that gun. I don't want my brother coming out of that toilet with just his dick in his hands, alright? Never hate your enemies. It affects your judgment. What's the matter with you? Is this what you've become, a Hollywood finocchio who cries like a woman? "Oh, what do I do? What do I do?" What is that nonsense? Ridiculous!</p>
            </div>
        </div>
        <div className="team-two">
            <div className="title-info">
                <h3 className="titleTwo">Clint Gunter</h3>
                <p>I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here. We're both part of the same hypocrisy, senator, but never think it applies to my family. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. When they come... they come at what you love. I know it was you, Fredo. You broke my heart. You broke my heart!</p>
            </div>
            <img src="https://i.imgur.com/dmJIsq6.png" className="aboutUs-image-right"/>
        </div>
        <div className="team-one">
            <img src="https://i.imgur.com/oWTgaZc.jpg" className="aboutUs-image-left"/>
            <div className="title-info">
                <h3 className="titleOne">Lance Walker</h3>
                <p>Leave the gun. Take the cannoli. Vito, how do you like my little angel? Isn't she beautiful? What's the matter with you? Is this what you've become, a Hollywood finocchio who cries like a woman? "Oh, what do I do? What do I do?" What is that nonsense? Ridiculous! Don't you know that I would use all of my power to prevent something like that from happening? I'm your older brother, Mike, and I was stepped over!</p>
            </div>
        </div>

    </div>
    
)


const AboutUs = () => {
    return(
        <Layout>
            <div>
                <h1>Meet the Team</h1>
            {   Team}
            </div>
        </Layout>
    )
}
export default AboutUs;