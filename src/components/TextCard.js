import { Link } from 'react-router-dom'
const TextCard = (props) => {
    
    return (
        <div className="hover:bg-gray-700 hover:shadow-inner bg-gray-800 rounded-lg mx-auto flex-auto overflow-hidden shadow-md md:h-1/5 hover:translate-y-2">
            <Link className="text-white hover:text-purple-400" >
                <div className="p-4 flex-grow-2 w-full flex h-40 items-center justify-center">
                    <div className=" font-semibold text-center">
                        <Link className="text-4xl">
                            Example Text
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TextCard