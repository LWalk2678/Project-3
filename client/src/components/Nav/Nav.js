import './Nav.css';
import { NavLink } from 'react-router-dom'

const authenticationedOptions = (
    <>
        <NavLink className="link" to ="/add-smoothie">Create a Smoothie!</NavLink>
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
    <NavLink className="link" to ="/aboutUs">
        Meet the Team
    </NavLink>
    </>
)

const Nav =({ user }) => {
    return(
        <nav>
            <div className="link-logo">
                <NavLink to ="/">Sunshine Smoothies</NavLink>
            </div>
            {user && <div className="link-welcome"> Welcome, {user.username}</div>}
            <div className="link-pages">
                {alwaysOptions}
                {user ? authenticationedOptions : unauthenticatedOptions}
            </div>
        </nav>
    )
}

export default Nav
