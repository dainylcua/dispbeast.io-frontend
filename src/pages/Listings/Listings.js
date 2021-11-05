import { useState, useEffect } from 'react'
import LoadingCard from '../../components/LoadingCard'
import ListingCard from '../../components/ListingCard'
import PageDescription from '../../components/PageDescription'

const Listings = (user) => {
    const [ listings, setListings ] = useState(null)
    const [ userInfo, setUserInfo ] = useState(null)
    const LISTINGS_URL = 'http://localhost:3001/api/listings'
    const USER_URL = `http://localhost:3001/api/users/${user.uid}`

    useEffect(() => {
        const getListingsAndUser = async () => {
            if(!user.auth) return
            const token = await user.auth.currentUser.getIdToken()
            const response = await fetch(LISTINGS_URL, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
            const listingInfo = await response.json()
            setListings(listingInfo)
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
        getListingsAndUser()
        return() => getListingsAndUser()
    }, [user, USER_URL])
    
    const loaded = () => (
        <>
            <PageDescription pageName="Listings" description="currently listed items for sale" />
            <div className="flex flex-col mx-auto space-y-1">
                <div className="text-white" >
                    <div className="flex w-full h-auto p-4 font-semibold flex-grow-2">
                        <div className="text-4xl text-green-200">
                            You currently have {userInfo.money}gp
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap gap-4">
                        
                    {
                        (!!listings.length) ? 
                            listings.map((listing) => (
                                <ListingCard key={listing._id} {...listing} userMoney={userInfo.money} />
                            ))
                        :
                        <div className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md" >
                            <div className="text-white" >
                                <div className="flex items-center justify-center w-full p-4 h-80 flex-grow-2">
                                    <div className="font-semibold text-center ">
                                        <div className="text-4xl">
                                            No listings available.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )

    return(
        userInfo ? loaded() : <LoadingCard />
    )
}

export default Listings