import { withRouter } from "react-router"
const PageInfo = (props) => {
    return(
        <div className={`${props.location.pathname === ('/') ? 'hidden' : ''} flex flex-col justify-center h-64 text-2xl text-center text-white bg-gray-800`}>
            <h1 className="text-8xl">{props.location.pathname}</h1>
            <div>{props.desc}</div>
        </div>
    )
}

export default withRouter(PageInfo)