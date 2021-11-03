const LoadingCard = () => (
    <div className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md animate-pulse" >
        <div className="text-white" >
            <div className="flex items-center justify-center w-full p-4 h-80 flex-grow-2">
                <div className="font-semibold text-center ">
                    <div className="text-4xl">
                        Loading...
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LoadingCard