import TextCard from "../../components/TextCard"

const Character = () => {
    return(
        <div className="flex flex-row h-48 mx-auto space-x-8">
            <div className="w-2/3 border">
                Big Box
            </div>
            <div className="flex flex-col w-1/3 space-y-8">
                <div className="border">
                    Box1
                </div>
                <div className="border">
                    Box2
                </div>
            </div>
        </div>
    )
}

export default Character