import { useState, useEffect } from 'react'
import { useParams, useLocation, withRouter, useHistory } from 'react-router'
import LoadingCard from '../../components/LoadingCard'
import PageDescription from '../../components/PageDescription'

const Item = (user) => {
    const userInfo = useLocation().state.userInfo
    const params = useParams()
    const [ item, setItem ] = useState(null)
    const [ itemColor, setItemColor ] = useState(null)
    const [ listShow, setListShow ] = useState(false)
    const [ listState, setListState ] = useState({price:''})
    // const ITEM_URL = `http://localhost:3001/api/items/${params.id}`
    // const POSTLISTING_URL = 'http://localhost:3001/api/listings'
    
    const ITEM_URL = `http://dispbeastio-backend.herokuapp.com/api/items/${params.id}`
    const POSTLISTING_URL = 'http://dispbeastio-backend.herokuapp.com/api/listings'
    const history = useHistory()

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
                    setItemColor('text-white')
                }
        }
        getItemInfo()
        return() => getItemInfo()
    }, [user, ITEM_URL])

    const toggleListShow = () => {setListShow(prevState => !prevState)}

    const onListChange = (evt) => {
        setListState((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }))
    }

    const postListing = async (sellingItem) => {
        const postTime = new Date()
        postTime.setDate(postTime.getDate() + 1)
        const formattedListing = {
            ...sellingItem,
            rarity: item.rarity,
            itemColor: itemColor,
            itemId: item._id,
            itemName: item.name,
            sellerId: userInfo._id,
            endDate: postTime
        }
        const token = await user.auth.currentUser.getIdToken()
        await fetch(POSTLISTING_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(formattedListing)
        })
        history.push('/listings')
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await postListing(listState)
    }

    const loaded = () => (
        <>
            <PageDescription pageName={item.name}/>   
            <div className="flex-auto mx-auto overflow-hidden font-semibold text-white bg-gray-900 rounded-lg shadow-md md:h-1/5">
                <div className="flex flex-row items-center w-full p-4 space-y-6 text-4xl justify-evenly auto">
                    <div className="flex flex-col items-center justify-center">
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
                    </div>
                    {
                        item.owner === userInfo._id ? 
                        <div className="flex flex-col items-center">
                            <div onClick={toggleListShow} className="w-64 p-4 text-center text-white bg-purple-900 rounded-lg shadow-md cursor-pointer hover:text-purple-100 hover:bg-purple-600">
                                List for sale?
                            </div>
                            <div>
                                {
                                    listShow ? 
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex flex-row items-center pt-6 space-x-6 text-3xl">
                                                <label className="text-4xl" htmlFor="price">Price:</label>
                                                <input className="w-32 h-12 px-4 font-medium bg-gray-700 rounded-lg" type="text" name="price" value={listState.price} onChange={onListChange}/>
                                                <input type="submit" value="Submit" className="w-32 h-12 font-semibold text-white bg-red-800 rounded-lg shadow-md cursor-pointer hover:text-red-100 hover:bg-red-600" />
                                            </div>
                                        </form>
                                    : 
                                    null
                                }
                            </div>
                        </div>
                        : 
                        null
                    }
                </div>
            </div>
        </>
    )

    return(
        item ? loaded() : <LoadingCard />
    )
}

export default withRouter(Item)