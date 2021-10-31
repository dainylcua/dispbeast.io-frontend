import TextCard from "../../components/TextCard"

const Character = () => {
    return(
        <div className="flex flex-row mx-auto space-x-8">
            <div className="w-2/3 border">
                Big Box
            </div>
            <div className="w-1/3 space-y-8">
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