import { useEffect, useState } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, logOut, signIn } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PageInfo from './components/PageInfo'
import pageData from './data/pageData'
import Listings from './pages/Listings/Listings'

function App() {

  const [ user, setUser ] = useState(null)

  const [ page, setPage ] = useState(0)
  console.log(pageData[page])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
    return() => unsubscribe()
  }, [user])

  return (
    <div className="w-full bg-gray-900 ">
      <div id="content-wrapper" className="w-5/6 mx-auto">
        <Navbar user={user}/>
        <PageInfo {...pageData[page]} />
        <Sidebar />
        {
          user ? 
            <button className="text-white" onClick={logOut}>Log out</button>
          :
            <button className="text-white" onClick={signIn}>Login With Google</button>
        }
        <Listings />
      </div>
    </div>
  )
}

export default App
