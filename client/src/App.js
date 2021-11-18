import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './screens/Home/Home'
import Smoothies from './screens/Smoothies/Smoothies'
import SmoothieCreate from './screens/SmoothieCreate/SmoothieCreate'
import SmoothieEdit from './screens/SmoothieEdit/SmoothieEdit'
import SmoothieDetail from './screens/SmoothieDetail/SmoothieDetail'
import AboutUs from './screens/AboutUs/AboutUs'
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/smoothies">
          <Smoothies user={user} />
        </Route>
        <Route path="/add-smoothie">
          {user ? <SmoothieCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/smoothies/:id/edit">
          {user ? <SmoothieEdit user={user} /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/smoothies/:id">
          <SmoothieDetail user={user} />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
