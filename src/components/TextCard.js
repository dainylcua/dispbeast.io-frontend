import { Link } from 'react-router-dom'
const TextCard = (props) => {
    
    return (
        <div className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-inner md:h-1/5 hover:translate-y-2">
            <Link className="text-white hover:text-purple-400" >
                <div className="flex items-center justify-center w-full h-40 p-4 flex-grow-2">
                    <div className="font-semibold text-center ">
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