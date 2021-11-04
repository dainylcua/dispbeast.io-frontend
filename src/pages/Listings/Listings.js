import { useState, useEffect } from 'react'
import LoadingCard from '../../components/LoadingCard'
import ListingCard from "../../components/ListingCard"

const Listings = (user) => {
    const LISTINGS_URL = 'http://localhost:3001/api/listings'
    const [ listings, setListings ] = useState(null)

    useEffect(() => {
        const getListings = async () => {
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
        }
        getListings()
        return() => getListings()
    }, [user])
    
    const loaded = () => (
        <div className="flex flex-col mx-auto space-y-10">
            <div className="flex flex-row flex-wrap gap-4">
                {
                    listings.map((listing, idx) => (
                        <ListingCard {...listing} />
                    ))
                }
            </div>
        </div>
    )

    return(
        listings ? loaded() : <LoadingCard />
    )
}

export default Listings