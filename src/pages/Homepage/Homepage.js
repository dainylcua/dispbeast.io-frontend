const Homepage = () => {
    return(
        <div className="flex flex-col mx-auto mt-8">
            <div className="flex flex-col text-2xl font-semibold text-white space-y-7">
                    <div className="space-y-1 font-extrabold border-b text-9xl">
                        <div className="text-purple-400">
                            dispbeast.io
                        </div>
                        <div className="text-6xl">
                            adventure. loot. live.
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div>
                            Embark on a journey across dispbeast.io and scavenge items from around the globe.
                        </div>
                        <div>
                            Form parties, guilds, and communities amongst other users.
                        </div>
                        <div>
                            Participate in daily raids and sell your loot to others.
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Homepage