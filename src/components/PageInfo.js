const PageInfo = (props) => {
    return(
        <div className="text-2xl text-center text-white ">
            <h1 className="text-8xl">{props.title}</h1>
            <div>{props.desc}</div>
        </div>
    )
}

export default PageInfo