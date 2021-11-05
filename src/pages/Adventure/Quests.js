import LootCard from "../../components/LootCard"
import { useState, useEffect } from 'react'
import LoadingCard from "../../components/LoadingCard"
import PageDescription from "../../components/PageDescription"


const Quests = (user) => {
    const [ mongoUser, setMongoUser ] = useState('')
    // const USER_URL = `http://localhost:3001/api/users/${user.uid}`
    const USER_URL = `http://dispbeastio-backend.herokuapp.com/api/users/${user.uid}`

    

    useEffect(() => {
        const getUserInfo = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(USER_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const foundUser = await response.json()
            setMongoUser(foundUser)
        }
        getUserInfo()
        return() => getUserInfo()
    }, [user, USER_URL])


    const loaded = () => (
        <>
            <PageDescription pageName="Quests" description="WIP: battle monsters and get loot" />
            <div className="flex flex-col mx-auto">
                <div className="flex flex-col space-y-10 md:flex-col">
                    <div className="w-1/2 mx-auto cursor-pointer">
                        <LootCard user={user} mongoUser={mongoUser}  />
                    </div>
                </div>
            </div>
        </>
    )
    
    return(
        user ? loaded() : <LoadingCard />
    )
}

export default Quests