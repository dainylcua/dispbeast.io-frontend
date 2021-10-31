import TextCard from "../../components/TextCard"

const Adventure = () => {
    return(
        <div className="flex flex-col mx-auto">
            <div className="flex flex-col space-y-10 md:flex-col">
                <div className="flex flex-row space-x-10">
                    <TextCard />
                    <TextCard />
                </div>
                <div className="w-1/2 mx-auto">
                    <TextCard />
                </div>
            </div>
        </div>
    )
}

export default Adventure