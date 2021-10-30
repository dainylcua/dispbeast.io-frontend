import { Link } from 'react-router-dom'

const ListingCard = (props) => {
    
    return (
        <div className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md hover:bg-gray-900 md:w-1/5 md:h-1/5">
            <Link>
                <div className="flex text-white hover:text-purple-300">
                    <div className="flex-grow-1">
                        <img className="object-cover h-40" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                    </div>
                    <div className="flex justify-between w-full p-4 flex-grow-2">
                        <div className="flex flex-col justify-between font-semibold text-left text-md">
                            <div>
                                <div className="text-xl">
                                    Listing Title
                                </div>
                                <div>
                                    Listing Seller
                                </div>
                            </div>
                            <div>
                                <div>
                                    Item Type
                                </div>
                                <div className="text-blue-300">
                                    {/* Add conditional text color */}
                                    Rarity
                                </div>
                            </div>
                        </div>
                        <div className="self-center text-3xl font-bold text-green-300">
                                50gp
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ListingCard