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
    </>
)

const Nav =({ user }) => {
    return(
        <nav>
            <div className="nav">
                <NavLink className="logo" to ="/">Sunshine Smoothies</NavLink>
                <div className="links">
                    {user && <div className="link-welcome"> Welcome, {user.username}</div>}
                    {alwaysOptions}
                    {user ? authenticationedOptions : unauthenticatedOptions}
                </div>
            </div>
        </nav>
    )
}

export default Nav