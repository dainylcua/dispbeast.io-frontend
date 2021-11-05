import TextCard from "../../components/TextCard"
import PageDescription from "../../components/PageDescription"

const Adventure = () => {
    return(
        <>
            <PageDescription pageName="Adventure" description="explore and gain glory" />
            <div className="flex flex-col mx-auto">
                <div className="flex flex-col space-y-10 md:flex-col">
                    <div className="flex flex-row space-x-10">
                        <TextCard path="/adventure/quests" text="Quests (WIP)"/>
                        <TextCard path="/adventure/guilds" text="Guilds (WIP)" />
                    </div>
                    <div className="w-1/2 mx-auto">
                        <TextCard path="/adventure/leaderboards" text="Leaderboards (WIP)" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adventure