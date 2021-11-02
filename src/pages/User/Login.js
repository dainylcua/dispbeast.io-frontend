import LogCard from "../../components/LogCard"

const Login = (props) => {
    return(
        <div className="flex flex-col mx-auto">
            <div className="flex flex-col space-y-10 md:flex-col">
                <div className="flex flex-row space-x-10">
                    <LogCard {...props} />
                </div>
            </div>
        </div>
    )
}

export default Login