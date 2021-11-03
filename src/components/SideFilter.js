const SideFilter = (props) => {

    return(

        <nav className={`${props.location.pathname === ('/listings') ? '' : 'hidden'} sticky top-0 z-0 flex flex-col items-center justify-center float-left w-1/6 h-screen overflow-y-auto text-2xl font-medium text-white bg-gray-800`}>
            <div className="flex flex-col space-y-6 text-left">
                cool filters here
            </div>
        </nav>
    )
} 

export default SideFilter