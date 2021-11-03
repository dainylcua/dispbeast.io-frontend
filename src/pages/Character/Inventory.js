import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import LoadingCard from "../../components/LoadingCard"

const Inventory = (user) => {
    const userInfo = useLocation().state.userInfo
    const [ inventory, setInventory ] = useState(null)
    const INVENTORY_URL = `http://localhost:3001/api/items/inventory/${userInfo._id}`

    useEffect(() => {
        const getInventoryInfo = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(INVENTORY_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const inventoryInfo = await response.json()
            setInventory(inventoryInfo)
        }
        getInventoryInfo()
        return() => getInventoryInfo()
    }, [user, INVENTORY_URL])    

    const loaded = () => (
        <div className="flex-auto mx-auto overflow-hidden font-semibold text-white bg-gray-900 rounded-lg shadow-md md:h-1/5 hover:translate-y-2">
                <div className="flex flex-col items-center justify-center w-full h-40 p-4 space-y-6 text-4xl flex-grow-2">
                    {
                        inventory.map((item) => (
                            <Link to={{pathname: `/item/${item._id}`, state: { userInfo: userInfo }}} key={`${item._id}`} className="text-purple-400 hover:text-purple-300">
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
        </div>
    )

    return(
        inventory ? loaded(): <LoadingCard />
    )
}

export default Inventory