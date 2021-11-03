import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
const Inventory = (user) => {
    const mongoId = useLocation().state.userInfo._id
    const [ inventory, setInventory ] = useState(null)
    const INVENTORY_URL = `http://localhost:3001/api/items/inventory/${mongoId}`

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
    }, [])    

    const loading = () => (
        <div className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md" >
            <div className="text-white" >
                <div className="flex items-center justify-center w-full p-4 h-80 flex-grow-2">
                    <div className="font-semibold text-center ">
                        <div className="text-4xl">
                            Loading...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const loaded = () => (
        <div className="flex-auto mx-auto overflow-hidden font-semibold text-white bg-gray-900 rounded-lg shadow-md md:h-1/5 hover:translate-y-2">
                <div className="flex flex-col items-center justify-center w-full h-40 p-4 space-y-6 text-4xl flex-grow-2">
                    {
                        inventory.map((item) => (
                            <Link to={`/item/${item._id}`}className="text-purple-400 hover:text-purple-300">
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
        </div>
    )

    return(
        inventory ? loaded(): loading()
    )
}

export default Inventory