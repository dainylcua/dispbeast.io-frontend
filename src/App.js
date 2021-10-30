import { useEffect, useState } from 'react'
import { useLocation, withRouter } from 'react-router'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, logOut, signIn } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PageInfo from './components/PageInfo'
import pageData from './data/pageData'
import Listings from './pages/Listings/Listings'
import SideFilter from './components/SideFilter'
import Marketplace from './pages/Listings/Marketplace'
import Homepage from './pages/Homepage/Homepage'
const SidebarWRouter = withRouter(Sidebar)
const SideFilterWRouter = withRouter(SideFilter)
const PageInfoWRouter = withRouter(PageInfo)

function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
    return() => unsubscribe()
  }, [user])


  return (
    <div className="w-full bg-gray-800">
      <Navbar user={user}/>
      <div id="content-wrapper" className="w-5/6 mx-auto bg-gray-800">
        <PageInfoWRouter />
        <SidebarWRouter />
        <SideFilterWRouter />
        {
          user ? 
            <button className="text-white" onClick={logOut}>Log out</button>
          :
            <button className="text-white" onClick={signIn}>Login With Google</button>
        }
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/listings" component={Listings} />
          <Route path="/marketplace">
            <Marketplace />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
