import { useState, useEffect } from "react"
import { useLocation } from "react-router"
const Inventory = (user) => {
    const userInfo = useLocation().state.userInfo
    const INVENTORY_URL = `http://localhost:3001/api/users/inventory`

    const [ inv, setInv ] = useState(null)

    useEffect(() => {
        const getUserInfo = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(INVENTORY_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const userInfo = await response.json()
            setInv(userInfo)
        }
        getUserInfo()
        return() => getUserInfo()
    }, [])

    return(
        <div className="flex-auto w-4/6 overflow-hidden bg-gray-900 rounded-lg shadow-md md:h-1/5 hover:translate-y-2">
            <div className="text-white" >
                <div className="flex items-center justify-center w-full h-40 p-4 flex-grow-2">
                    <div className="font-semibold">
                        <div className="text-4xl">
                            Example Text
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory