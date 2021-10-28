import { useEffect, useState } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, logOut, signIn } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import TextCard from './components/TextCard'
import ListingCard from './components/ListingCard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
    return() => unsubscribe()
  }, [user])

  return (
    <div className="h-screen bg-gray-900">
      <Navbar user={user}/>
      <Sidebar />
      <div className="App flex flex-col w-5/6">
        {
          user ? 
            <button onClick={logOut}>Log out</button>
          :
            <button onClick={signIn}>Login With Google</button>
        }
        <TextCard />
        <div className="flex flex-col md:flex-row-wrap">
        <ListingCard /> 
        <ListingCard />
        <ListingCard />
        <ListingCard />

        <ListingCard /> 
        <ListingCard />
        <ListingCard />
        <ListingCard />
        </div>

      </div>
    </div>
  )
}

export default App
