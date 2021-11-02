const LogCard = ({ signIn, logOut, user }) => {
    
    return (
        <div onClick={ user ? logOut : signIn } className="flex-auto mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 hover:shadow-inner md:h-1/5 hover:translate-y-2">
            <div className="text-white hover:text-purple-400" >
                <div className="flex items-center justify-center w-full h-40 p-4 flex-grow-2">
                    <div className="text-4xl font-semibold text-center">
                            { user ? 'Log Out' : 'Sign In with Google' }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogCard