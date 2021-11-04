import { useEffect, useState } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, logOut, signIn } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Navbar from './components/Navbar'
import PageInfo from './components/PageInfo'
import Listings from './pages/Listings/Listings'
import Homepage from './pages/Homepage/Homepage'
import Adventure from './pages/Adventure/Adventure'
import Footer from './components/Footer'
import Character from './pages/Character/Character'
import Login from './pages/User/Login'
import Inventory from './pages/Character/Inventory'
import Item from './pages/Character/Item'

// TODO: ADD SPECIFIC PAGE INFO INSTEAD OF PATHS
// TODO: ADD LISTING BUY CAPABILITIES ( MONEY LOWERING, ITEM TRANSFER, EXPIRY DATE )
// TODO: ADD REDIRECTS ON PAGES DEPENDENT ON USERS
// TODO: COMPONENTIZE STAT BLOCK ON USER PAGE
// TODO: REMOVE ITEM FROM USER INVENTORY
// TODO: REMOVE ALERTS IN FIREBASE.JS AND REPLACE WITH REDIRECTS
// TODO: ADD DARK MODE TOGGLE
// TODO: READD FILTER ( FOR RESPONSIVE THROUGH BUTTON PRESS )

function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
    return() => unsubscribe()
  }, [user])


  return (
    <div className="flex flex-col w-full bg-gray-800">
      <Navbar user={user}/>
      <div id="content-wrapper" className="w-5/6 min-h-screen mx-auto bg-gray-800 lg:w-2/3">
        <PageInfo />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/listings">
            <Listings {...user} />
          </Route>
          <Route exact path="/adventure">
            <Adventure />
          </Route>
          <Route exact path="/character">
            <Character {...user} />
          </Route>
          <Route exact path="/character/inventory">
            <Inventory {...user} />
          </Route>
          <Route path="/item/:id/">
            <Item {...user} />
          </Route>
          <Route path="/user/dashboard">
            <Login user={user} signIn={signIn} logOut={logOut} />
          </Route>
        </Switch>
      </div>
      <Footer user={user} />
    </div>
  )
}

export default App
