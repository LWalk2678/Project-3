import './Nav.css';
import { NavLink } from 'react-router-dom'

const authenticationedOptions = (
    <>
        <NavLink className="link" to ="/add-smoothie">Create a Smoothie</NavLink>
        <NavLink className="link" to ="/sign-out">Sign Out</NavLink>
    </>

)

const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to ="/sign-in">Sign In</NavLink>
    </>
)

const alwaysOptions = (
    <>
        <NavLink className="link" to ="/smoothies">Smoothies</NavLink>
        <NavLink className="link" to ="/aboutUs">Meet the Team</NavLink>
    </>
)

const Nav =({ user }) => {
    return(
        <nav>
            <div className="nav-section link-logo">
                <NavLink to ="/">
                    <h1>Sunshine Smoothies</h1>
                </NavLink>
            </div>
            {user && <div className="nav-section link-welcome">
                <span>Welcome, {user.username}!</span>
            </div>}
            <div className="nav-section link-pages">
                {alwaysOptions}
                {user ? authenticationedOptions : unauthenticatedOptions}
            </div>
        </nav>
    )
}

export default Nav
