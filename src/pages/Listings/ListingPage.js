import { useState, useEffect } from 'react'
import { useParams, useLocation, withRouter, useHistory } from 'react-router'
import LoadingCard from '../../components/LoadingCard'

const ListingPage = (user) => {
    
    const params = useParams()
    const [ listingInfo, setListingInfo ] = useState(null)
    const [ userMoney, setUserMoney ] = useState(0)
    const LISTINGINFO_URL = `http://localhost:3001/api/listings/${params.id}`
    const USER_URL = `http://localhost:3001/api/users/${user.uid}`

    useEffect(() => {
        const getListingInfoAndUserMoney = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(LISTINGINFO_URL, {
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
            const userMoney = userInfo.money
            setUserMoney(userMoney)
        }
        getListingInfoAndUserMoney()
        // Still getting a useEffect memory leak issue?
        return() => getListingInfoAndUserMoney()
    }, [user, LISTINGINFO_URL, USER_URL])


    const loaded = () => (
        <div className="flex flex-col">
            <div className="flex w-full h-auto p-4 font-semibold flex-grow-2">
                <div className="text-4xl text-green-200">
                    You currently have {userMoney}gp
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
                        userMoney > listingInfo.price ? 
                            <div>
                                Buy Item
                            </div>
                        :
                            <div className="text-red-300">
                                You don't have enough to buy this item
                            </div>
                    }
                </div>
            </div>
        </div>
    )

    return(
        userMoney ? loaded() : <LoadingCard />
    )
}

export default withRouter(ListingPage)