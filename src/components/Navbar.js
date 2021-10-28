import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return(

        <nav className="bg-gray-900 h-12 text-white text-2xl flex items-center font-medium justify-between shadow-lg">
            <Link to="/" className="text-3xl pl-4 font-semibold">dispbeast.io</Link>
            <div className="flex space-x-6">
                <Link to="/marketplace">marketplace</Link>
                <Link to="/character">character</Link>
                <Link to="/adventure">adventure</Link>
            </div>
            {
                props.user ?
                <div className="flex pr-4">
                    <Link to="/dashboard">dashboard</Link>
                </div>
                :
                <div className="flex space-x-6 pr-4">
                    <Link to="/login">login</Link>
                    <Link to="/signup">signup</Link>
                </div>
            }
        </nav>
    )
} 

export default Navbar