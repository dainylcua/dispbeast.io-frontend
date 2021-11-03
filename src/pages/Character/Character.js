
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import LoadingCard from "../../components/LoadingCard"

const Character = (user) => {
    
    const [ info, setInfo ] = useState(null)
    const USER_URL = `http://localhost:3001/api/users/${user.uid}`

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
        <div className="flex-auto mx-auto overflow-hidden text-white bg-gray-900 rounded-lg shadow-md">
            <div className="flex justify-between w-full h-auto p-4 flex-grow-2">
                <div className="flex flex-col items-center mx-auto space-y-6 text-6xl font-semibold">
                    <div>
                        {info.email.substring(0, info.email.lastIndexOf("@"))}
                    </div>
                    <Link to={{ pathname: `/character/inventory`, state: { userInfo: info }}} className="text-6xl text-purple-400 hover:text-purple-300">
                        Inventory
                    </Link>
                </div>
                <div className="divide-y divide-gray-600 divide-solid">
                    {/* TODO: Componentize potential, this section can be optimized */}
                    <div className="flex flex-row justify-between w-48 pb-4">
                        <div className="flex flex-col items-center justify-center flex-grow text-xl">
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
                    <div className="flex flex-row justify-between pt-4">
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
    )

    return(
        info ? loaded() : <LoadingCard />
    )
}

export default Character