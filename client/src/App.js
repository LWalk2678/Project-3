import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './screens/Home/Home'
import Smoothies from './screens/Smoothies/Smoothies'
import SmoothieCreate from './screens/SmoothieCreate/SmoothieCreate'
import SmoothieEdit from './screens/SmoothieEdit/SmoothieEdit'
import SmoothieDetail from './screens/SmoothieDetail/SmoothieDetail'

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
          <Home/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/sign-in">
          <SignIn/>
        </Route>
        <Route path="/sign-out">
          <SignOut/>
        </Route>
        <Route exact path="/smoothies">
          <Smoothies/>
        </Route>
        <Route path="/add-smoothie">
          <SmoothieCreate/>
          {user ? <SmoothieCreate /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/smoothies/:id/edit">
          <SmoothieEdit/>
          {user ? <SmoothieEdit /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/smoothies/:id">
          <SmoothieDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
