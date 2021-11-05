const PageDescription = ({pageName, description}) => {
    return(
        <div className={`flex flex-col justify-center h-auto text-2xl text-center text-white bg-gray-800 space-y-4 py-10`}>
            <h1 className="text-8xl">{pageName}</h1>
            <div>{description}</div>
        </div>
    )
}

export default PageDescription