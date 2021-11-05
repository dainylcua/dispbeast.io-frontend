import { useState, useEffect } from 'react'
import { useParams, withRouter, useHistory } from 'react-router'
import LoadingCard from '../../components/LoadingCard'
import PageDescription from '../../components/PageDescription'

const ListingPage = (user) => {
    
    const history = useHistory()
    const params = useParams()
    const [ listingInfo, setListingInfo ] = useState({})
    const [ userInfo, setUserInfo ] = useState(0)
    const LISTING_URL = `http://localhost:3001/api/listings/${params.id}`
    const USER_URL = `http://localhost:3001/api/users/${user.uid}`
    const BUY_URL = `http://localhost:3001/api/users/purchase`
    const ITEMTRANSFER_URL = `http://localhost:3001/api/items/${listingInfo.itemId}`

    useEffect(() => {
        const getListingInfoAndUser = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(LISTING_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const listingInfo = await response.json()
            setListingInfo(listingInfo)
            const userResponse = await fetch(USER_URL, {
                method: 'GET',
                headers: {
                    'Content-type': 'Application/JSON',
                    'Authorization': 'Bearer ' + token
                }
            })
            const userInfo = await userResponse.json()
            setUserInfo(userInfo)
        }
        getListingInfoAndUser()
        return() => getListingInfoAndUser()
    }, [user, LISTING_URL, USER_URL])

    const buyItem = async () => {
        if(userInfo.money < listingInfo.price) return
        const token = await user.auth.currentUser.getIdToken()
        const transaction = {
            price: listingInfo.price,
            buyer: userInfo._id,
            seller: listingInfo.sellerId
        }
        await fetch(BUY_URL, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/JSON',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(transaction)
        })
        await fetch(ITEMTRANSFER_URL, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/JSON',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(transaction)
        })
        await fetch(LISTING_URL, {
            method: 'DELETE',
            headers: {
                'Content-type': 'Application/JSON',
                'Authorization': 'Bearer ' + token
            }
        })
    }

    const handleBuy = async (evt) => {
        evt.preventDefault()
        await buyItem()
        history.push('/listings')
    }


    const loaded = () => (
        <>
        <PageDescription pageName={listingInfo.itemName} />
            <div className="flex flex-col">
                <div className="flex w-full h-auto p-4 font-semibold flex-grow-2">
                    <div className="text-4xl text-green-200">
                        You currently have {userInfo.money}gp
                    </div>
                </div>
                <div className="flex-auto w-full mx-auto overflow-hidden font-semibold text-white bg-gray-900 rounded-lg shadow-md md:h-1/5">
                    <div className="flex flex-col items-center h-auto p-4 space-y-6 text-4xl justify-evenly">
                        <div>
                            Item Name: {listingInfo.itemName}
                        </div>
                        <div>
                            Rarity: {listingInfo.rarity}
                        </div>
                        <div className="text-green-300">
                            Cost: {listingInfo.price}gp
                        </div>
                        {
                            userInfo.money > listingInfo.price ? 
                                <div onClick={handleBuy} className="flex-auto mx-auto overflow-hidden bg-green-800 rounded-lg shadow-md cursor-pointer hover:bg-green-600 hover:shadow-inner md:h-1/5">
                                    <div className="text-white hover:text-green-100" >
                                        <div className="flex items-center justify-center w-full h-auto p-4 flex-grow-2">
                                            <div className="font-semibold text-center ">
                                                <div className="text-4xl">
                                                    Buy Item
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :
                                <div className="text-red-300">
                                    You don't have enough to buy this item
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )

    return(
        userInfo.money ? loaded() : <LoadingCard />
    )
}

export default withRouter(ListingPage)