import { Link } from 'react-router-dom'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {

    return(
        <nav className="z-10 flex flex-col items-center justify-between h-auto p-6 font-medium text-white bg-gray-900 md:flex-row md:h-16 text-md md:text-2xl">
            <Link to="/" className="text-3xl font-semibold text-purple-400 hover:text-purple-300">dispbeast.io</Link>
            {
                props.user ?
                <>
                    <div className={`md:flex flex-col md:flex-row gap-6 space-x-6 last:flex-end`}>
                        <Link to="/listings" className=" hover:text-purple-300">listings</Link>
                        <Link to="/character" className="hover:text-purple-300">character</Link>
                        <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
                        <Link to="/user/dashboard" className="hover:text-purple-300">dashboard</Link>
                    </div>
                </>
                :
                <>
                    <div className={`md:flex md:flex-row flex-col gap-6`}>
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