import TextCard from "../../components/TextCard"

const Marketplace = () => {
    return(
        <div className="flex flex-col w-4/6">
            <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-8">
                <TextCard />
                <TextCard />
            </div>
        </div>
    )
}

export default Marketplace