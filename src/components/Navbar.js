import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return(

        <nav className="bg-gray-900 h-12 text-purple-400 text-2xl flex items-center font-medium justify-between z-10">
            <Link to="/" className="text-3xl pl-4 font-semibold hover:text-purple-300">dispbeast.io</Link>
            <div className="flex space-x-6">
                <Link to="/marketplace" className="hover:text-purple-300">marketplace</Link>
                <Link to="/character" className="hover:text-purple-300">character</Link>
                <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
            </div>
            {
                props.user ?
                <div className="flex pr-4">
                    <Link to="/dashboard" className="hover:text-purple-300">dashboard</Link>
                </div>
                :
                <div className="flex space-x-6 pr-4">
                    <Link to="/login" className="hover:text-purple-300">login</Link>
                    <Link to="/signup" className="hover:text-purple-300">signup</Link>
                </div>
            }
        </nav>
    )
} 

export default Navbar