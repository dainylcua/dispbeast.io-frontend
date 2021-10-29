import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return(

        <nav className="bg-gray-900 h-screen w-1/6 text-white text-2xl flex flex-col overflow-y-auto items-center justify-center font-medium sticky top-0 float-left z-0">
            <div className="flex flex-col text-left space-y-6">
                <Link to="/marketplace" className="hover:text-purple-300">marketplace</Link>
                <Link to="/character" className="hover:text-purple-300">character</Link>
                <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
            </div>
        </nav>
    )
} 

export default Sidebar