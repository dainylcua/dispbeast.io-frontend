import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const ListingCard = (props) => {
    
    return (
        <div className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md hover:bg-gray-900 md:w-1/4 md:h-1/5">
            <Link to={`listings/${props._id}`}>
                <div className="flex text-white hover:text-purple-300">
                    <div className="self-center pl-4 flex-grow-1">
                        <FontAwesomeIcon icon={faDiceD20} className="object-cover" size="4x" />
                    </div>
                    <div className="flex justify-between w-full p-4 flex-grow-2">
                        <div className="flex flex-col justify-between font-semibold text-left text-md">
                            <div>
                                <div className={`text-3xl ${props.itemColor}`}>
                                    {props.itemName}
                                </div>
                            </div>
                            <div className={`text-3xl font-bold ${(props.price > props.userMoney) ? 'text-red-300' : 'text-green-300'}`}>
                                {props.price}gp
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ListingCard