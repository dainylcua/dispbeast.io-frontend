import './App.css'
import { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, logOut, signIn } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Navbar from './components/Navbar'
import Listings from './pages/Listings/Listings'
import Homepage from './pages/Homepage/Homepage'
import Adventure from './pages/Adventure/Adventure'
import Footer from './components/Footer'
import Character from './pages/Character/Character'
import Login from './pages/User/Login'
import Inventory from './pages/Character/Inventory'
import Item from './pages/Character/Item'
import Quests from './pages/Adventure/Quests'
import NotFoundPage from './pages/Other/NotFound'
import ListingPage from './pages/Listings/ListingPage'

function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
    return() => unsubscribe()
  }, [user])
  
  return (
    <div className="flex flex-col w-full bg-gray-800">
      <Navbar user={user}/>
      <div id="content-wrapper" className="w-5/6 mx-auto bg-gray-800 lg:w-2/3">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/listings">
            { localStorage.loggedIn ? <Listings {...user} /> : <Redirect to={{pathname: "/user/dashboard"}} />  }
          </Route>
          <Route exact path="/listings/:id">
            { localStorage.loggedIn ? <ListingPage {...user} /> : <Redirect to={{pathname: "/user/dashboard"}} />  }
          </Route>
          <Route exact path="/adventure">
            { localStorage.loggedIn ? <Adventure /> : <Redirect to={{pathname: "/user/dashboard"}} /> }
          </Route>
          <Route path="/adventure/quests">
            { localStorage.loggedIn ? <Quests {...user} /> : <Redirect to={{pathname: "/user/dashboard"}} /> }
          </Route>
          <Route exact path="/character">
            { localStorage.loggedIn ? <Character {...user} /> : <Redirect to={{pathname: "/user/dashboard"}} /> }
          </Route>
          <Route path="/character/inventory">
            { localStorage.loggedIn ? <Inventory {...user} /> : <Redirect to={{pathname: "/user/dashboard"}} /> }
          </Route>
          <Route path="/item/:id/">
            { localStorage.loggedIn ? <Item {...user} /> : <Redirect to={{pathname: "/user/dashboard"}} /> }
          </Route>
          <Route path="/user/dashboard">
            <Login user={user} signIn={signIn} logOut={logOut} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <Footer user={user} />
    </div>
  )
}

export default App
