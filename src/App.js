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
    <div className=" bg-gray-900 w-full">
      <div className="w-5/6 mx-auto">
        <Navbar user={user}/>
        <div className="text-white text-2xl text-center ">
          <h1 className="text-8xl">Listings</h1>
          <div>Find a listing here</div>
        </div>
        <Sidebar />
        <div className="flex flex-col w-4/6">
          {
            user ? 
              <button onClick={logOut}>Log out</button>
            :
              <button onClick={signIn}>Login With Google</button>
          }
          <div className="flex flex-col md:flex-col space-y-10">
          <TextCard />
            <div className="flex flex-row space-x-10">
              <ListingCard /> 
              <ListingCard />
            </div>

            <div className="flex flex-row space-x-10">
              <ListingCard /> 
              <ListingCard />
            </div>

            <div className="flex flex-row space-x-10">
              <ListingCard /> 
              <ListingCard />
            </div>

            <div className="flex flex-row space-x-10">
              <ListingCard /> 
              <ListingCard />
            </div>
            
            <div className="flex flex-row space-x-10">
              <ListingCard /> 
              <ListingCard />
            </div>

          </div>
          <div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
