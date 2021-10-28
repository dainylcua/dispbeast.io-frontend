import { Link } from 'react-router-dom'
const TextCard = (props) => {
    
    return (
        <div className="border bg-gray-800 rounded-lg mx-auto w-1/2 overflow-hidden shadow-md md:w-1/5 md:h-1/5 hover:translate-y-2">
            <div className="p-4 flex-grow-2 w-full flex h-40 items-center justify-center">
                <div className="text-purple-300 font-semibold text-center">
                    <Link className="transition ease-in-out hover:text-purple-400 text-4xl">
                        Example Text
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TextCard