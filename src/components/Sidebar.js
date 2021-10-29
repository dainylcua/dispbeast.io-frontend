import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return(

        <nav className="sticky top-0 z-0 flex flex-col items-center justify-center float-left w-1/6 h-screen overflow-y-auto text-2xl font-medium text-white bg-gray-900">
            <div className="flex flex-col space-y-6 text-left">
                <Link to="/marketplace" className="hover:text-purple-300">marketplace</Link>
                <Link to="/character" className="hover:text-purple-300">character</Link>
                <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
            </div>
        </nav>
    )
} 

export default Sidebar