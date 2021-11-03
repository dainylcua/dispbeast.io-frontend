import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router'
import LoadingCard from '../../components/LoadingCard'
import { Link } from 'react-router-dom'

const Item = (user) => {
    const userInfo = useLocation().state.userInfo
    const params = useParams()
    const [ item, setItem ] = useState(null)
    const [ itemColor, setItemColor ] = useState(null)
    const ITEM_URL = `http://localhost:3001/api/items/${params.id}`

    useEffect(() => {
        const getItemInfo = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(ITEM_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const itemInfo = await response.json()
            setItem(itemInfo)
            switch (itemInfo.rarity) {
                case 'uncommon':
                    setItemColor('text-blue-300')
                    break
                case 'rare':
                    setItemColor('text-indigo-300')
                    break
                case 'veryRare':
                    setItemColor('text-purple-300')
                    break
                case 'legendary':
                    setItemColor('text-yellow-300')
                    break
                case 'artifact':
                    setItemColor('text-pink-300')
                    break
                default:
                    setItemColor('white')
                }
        }
        getItemInfo()
        // Still getting a useEffect memory leak issue?
        return() => getItemInfo()
    }, [user, ITEM_URL])

    const loaded = () => (
        <div className="flex-auto mx-auto overflow-hidden font-semibold text-white bg-gray-900 rounded-lg shadow-md md:h-1/5 hover:translate-y-2">
            <div className="flex flex-col items-center justify-center w-full p-4 space-y-6 text-4xl h-60 flex-grow-2">
                <div>
                    {item.name}
                </div>
                {
                    item.itemType === 'armor' ? 
                    <div>
                        Armor Class: {item.ac}
                    </div>
                    : 
                    <div>
                        Damage: {`${item.damage.quantity}d${item.damage.dice} ${item.damage.type}`}
                    </div>
                }
                <div className={`${itemColor}`}>
                    Rarity: {item.rarity}
                </div>
                <div>
                    {
                        // Will shower to user if correct id, can put up item for listing
                        item.owner === userInfo._id ? 
                        <div>
                            <Link to={{pathname: `/item/${item._id}/listing`, state: { userInfo: userInfo, itemInfo: item }}} 
                            className="text-purple-400 hover:text-purple-300">
                                List this item
                            </Link>
                        </div>
                        : 
                        ''
                    }
                </div>
            </div>
        </div>
    )

    return(
        item ? loaded() : <LoadingCard />
    )
}

export default Item