import { useState } from 'react'

const LootCard = ({mongoUser, user}) => {

    const [ itemInfo, setItemInfo ] = useState(null)
    // const NEWITEM_URL = 'http://localhost:3001/api/items/loot'
    const NEWITEM_URL = 'https://dispbeastio-backend.herokuapp.com/api/items/loot'
    

    const lootClick = async () => {
        if (!user.auth) return
        const token = await user.auth.currentUser.getIdToken()
        const response = await fetch(NEWITEM_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(mongoUser)
        })
        const newItem = await response.json()
        setItemInfo(newItem)
    }


    return (
        <div onClick={lootClick} className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 hover:shadow-inner md:h-1/5 hover:translate-y-2">
            <div className="text-white hover:text-purple-400" >
                <div className="flex flex-col items-center justify-center w-full h-40 p-4 flex-grow-2">
                    <div className="text-4xl font-semibold text-center">
                        <div>
                            Loot an Item
                        </div>
                        {
                            itemInfo ?
                                <div className="pt-5 text-sm">
                                    Congratulations! You found: {itemInfo.name}
                                </div> 
                            :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LootCard