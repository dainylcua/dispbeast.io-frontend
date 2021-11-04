import { Link } from 'react-router-dom'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {
    return(

        <nav className="z-10 flex items-center justify-between h-20 text-2xl font-medium text-white bg-gray-900">
            <Link to="/" className="pl-8 text-3xl font-semibold text-purple-400 hover:text-purple-300">dispbeast.io</Link>
            
            {
                props.user ?
                <>
                    <div className="flex space-x-6">
                    <Link to="/listings" className=" hover:text-purple-300">listings</Link>
                    <Link to="/character" className="hover:text-purple-300">character</Link>
                    <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
                    </div>
                    <div className="flex pr-8">
                        <Link to="/user/dashboard" className="hover:text-purple-300">dashboard</Link>
                    </div>
                </>
                :
                <>
                    <div className="flex pr-8 space-x-6">
                        <div className="flex flex-row items-center">
                        <FontAwesomeIcon icon={faGoogle} className="mr-2"/>
                        <Link to="/user/dashboard" className="hover:text-purple-300">login</Link>
                        </div>
                    </div>
                </>
            }
        </nav>
    )
} 

export default Navbar