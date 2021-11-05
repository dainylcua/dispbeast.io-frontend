import { Link } from 'react-router-dom'
const TextCard = ({path, text}) => {
    
    return (
        <div className="flex-auto h-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-inner">
            <Link to={`${path}`} className="text-white hover:text-purple-400" >
                <div className="flex items-center justify-center w-full h-auto p-4 flex-grow-2">
                    <div className="font-semibold text-center ">
                        <div className="text-4xl">
                            {text}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TextCard