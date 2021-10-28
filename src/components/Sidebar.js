import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return(

        <nav className="bg-gray-900 h-3/4 w-1/6 text-white text-2xl flex flex-col overflow-y-auto items-center font-medium sticky top-0 float-left">
            <Link to="/" className="text-3xl pl-4 font-semibold">dispbeast.io</Link>
            <div className="flex flex-col space-y-6">
                <Link to="/marketplace">marketplace</Link>
                <Link to="/character">character</Link>
                <Link to="/adventure">adventure</Link>
            </div>
        </nav>
    )
} 

export default Sidebar