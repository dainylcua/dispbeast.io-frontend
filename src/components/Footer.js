import { Link } from 'react-router-dom'

const Footer = (props) => {
    return(

        <footer className="z-10 flex items-center justify-between h-20 mt-10 text-2xl font-medium text-white bg-gray-900">
            <Link to="/" className="pl-8 text-3xl font-semibold text-purple-400 hover:text-purple-300">dispbeast.io</Link>
            <div className="flex space-x-6">
                <Link to="/marketplace" className=" hover:text-purple-300">marketplace</Link>
                <Link to="/character" className="hover:text-purple-300">character</Link>
                <Link to="/adventure" className="hover:text-purple-300">adventure</Link>
            </div>
            {
                props.user ?
                <div className="flex pr-8">
                    <Link to="/dashboard" className="hover:text-purple-300">dashboard</Link>
                </div>
                :
                <div className="flex pr-8 space-x-6">
                    <Link to="/login" className="hover:text-purple-300">login</Link>
                    <Link to="/signup" className="hover:text-purple-300">signup</Link>
                </div>
            }
        </footer>
    )
} 

export default Footer