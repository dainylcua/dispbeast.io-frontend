import ListingCard from "../../components/ListingCard"

const Homepage = () => {
    return(
        <div className="flex flex-col mx-auto">
            <div className="flex flex-col space-y-10">
                    <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-10 md:flex-row">
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