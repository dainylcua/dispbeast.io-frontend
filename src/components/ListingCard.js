import { Link } from 'react-router-dom'

const ListingCard = (props) => {
    
    return (
        <div className="bg-gray-800 hover:bg-gray-900 rounded-lg mx-auto w-1/2 overflow-hidden shadow-md md:w-1/5 md:h-1/5 hover:translate-y-2">
            <Link>
                <div className="flex">
                    <div className="flex-grow-1">
                        <img className="h-40 object-cover" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                    </div>
                    <div className="p-4 flex-grow-2 w-full flex justify-between">
                        <div className="flex flex-col text-purple-300 font-semibold text-left text-md justify-between">
                            <div>
                                <div className="transition ease-in-out text-xl">
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
                        <div className="text-green-300 font-bold text-3xl self-center">
                                50gp
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ListingCard