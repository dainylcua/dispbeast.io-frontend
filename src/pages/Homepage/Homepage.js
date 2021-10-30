import ListingCard from "../../components/ListingCard"
import TextCard from "../../components/TextCard"

const Homepage = () => {
    return(
        <div className="flex flex-col w-4/6">
            <div className="flex flex-col space-y-10 md:flex-col">
                    <div className="flex flex-row space-x-10">
                        <ListingCard /> 
                        <ListingCard />
                    </div>

                    <div className="flex flex-row space-x-10">
                        <ListingCard /> 
                        <ListingCard />
                    </div>

                    <div className="flex flex-row space-x-10">
                        <ListingCard /> 
                        <ListingCard />
                    </div>

                    <div className="flex flex-row space-x-10">
                        <ListingCard /> 
                        <ListingCard />
                    </div>
            
                    <div className="flex flex-row space-x-10">
                        <ListingCard /> 
                        <ListingCard />
                    </div>
            </div>
        </div>
    )
}

export default Homepage