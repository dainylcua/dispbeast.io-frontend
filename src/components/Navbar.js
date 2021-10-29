import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return(

        <nav className="z-10 flex items-center justify-between h-12 text-2xl font-medium text-white bg-gray-900">
            <Link to="/" className="pl-4 text-3xl font-semibold text-purple-400 hover:text-purple-300">dispbeast.io</Link>
            <div className="flex space-x-6">
                <Link to="/marketplace" className=" hover:text-purple-300">marketplace</Link>
                <Link to="/character" className="hover:text-purple-300">character</Link>
                <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
            </div>
            {
                props.user ?
                <div className="flex pr-4">
                    <Link to="/dashboard" className="hover:text-purple-300">dashboard</Link>
                </div>
                :
                <div className="flex pr-4 space-x-6">
                    <Link to="/login" className="hover:text-purple-300">login</Link>
                    <Link to="/signup" className="hover:text-purple-300">signup</Link>
                </div>
            }
        </nav>
    )
} 

export default Navbar