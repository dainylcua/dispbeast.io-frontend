
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import LoadingCard from "../../components/LoadingCard"
import PageDescription from "../../components/PageDescription"

const Character = (user) => {
    
    const [ info, setInfo ] = useState(null)
    // const USER_URL = `http://localhost:3001/api/users/${user.uid}`
    const USER_URL = `https://dispbeastio-backend.herokuapp.com/api/users/${user.uid}`

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
            const userInfo = await response.json()
            setInfo(userInfo)
        }
        getUserInfo()
        return() => getUserInfo()
    }, [user, USER_URL])

    const loaded = () => (
        <>
        <PageDescription pageName="Character" />
            <div className="flex-auto mx-auto overflow-hidden text-white bg-gray-900 rounded-lg shadow-md">
                <div className="flex flex-col justify-between w-full h-auto p-4 md:flex-row flex-grow-2">
                    <div className="flex flex-col items-center mx-auto space-y-6 text-6xl font-semibold">
                        <div>
                            {info.email.substring(0, info.email.lastIndexOf("@"))}
                        </div>
                        <Link to={{ pathname: `/character/inventory`, state: { userInfo: info }}} className="text-6xl text-purple-400 hover:text-purple-300">
                            Inventory
                        </Link>
                    </div>
                    <div className="w-auto h-auto p-4 divide-y divide-gray-600 divide-solid">
                        <div className="flex flex-row justify-between gap-4">
                            <div className="flex flex-col items-center justify-center flex-grow text-xl ">
                                <div className="font-semibold">
                                    STR
                                </div>
                                <div className="font-medium">
                                    {info.stats[0]}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center flex-grow text-xl">
                                <div className="font-semibold">
                                    DEX
                                </div>
                                <div className="font-medium">
                                    {info.stats[1]}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center flex-grow text-xl">
                                <div className="font-semibold">
                                    CON
                                </div>
                                <div className="font-medium">
                                    {info.stats[2]}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col items-center justify-center flex-grow text-xl">
                                <div className="font-semibold">
                                    INT
                                </div>
                                <div className="font-medium">
                                    {info.stats[3]}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center flex-grow text-xl">
                                <div className="font-semibold">
                                    WIS
                                </div>
                                <div className="font-medium">
                                    {info.stats[4]}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center flex-grow text-xl">
                                <div className="font-semibold">
                                    CHA
                                </div>
                                <div className="font-medium">
                                    {info.stats[5]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return(
        info ? loaded() : <LoadingCard />
    )
}

export default Character