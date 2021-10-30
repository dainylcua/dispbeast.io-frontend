import ListingCard from "../../components/ListingCard"
import TextCard from "../../components/TextCard"

const Marketplace = () => {
    return(
        <div className="flex flex-col w-4/6">
            <div className="flex flex-col space-y-10 md:flex-col">
                <TextCard />
                <TextCard />
                <TextCard />
            </div>
        </div>
    )
}

export default Marketplace