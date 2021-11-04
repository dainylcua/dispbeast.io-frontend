import LogCard from "../../components/LogCard"

const Login = (props) => {
    return(
        <div className="flex flex-col mx-auto space-y-10">
            {
                props.user ? 
                    null
                :
                <div className="flex-auto mx-auto overflow-hidden font-semibold text-white bg-red-900 rounded-lg shadow-md md:h-1/5">
                    <div className="flex flex-col items-center justify-center w-full h-40 p-4 space-y-6 text-4xl flex-grow-2">
                        Please log in to enjoy all features of the site.
                    </div>
                </div>
            }
            <LogCard {...props} />
        </div>
    )
}

export default Login