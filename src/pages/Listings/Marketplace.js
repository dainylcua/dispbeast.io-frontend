import TextCard from "../../components/TextCard"

const Marketplace = () => {
    return(
        <div className="flex flex-col mx-auto">
            <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-8">
                <TextCard path="/listings" text="All Listings"/>
                <TextCard path="/user/mylistings" text="My Listings"/>
            </div>
        </div>
    )
}

export default Marketplace