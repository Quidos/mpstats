import {categories, createOption, createOptions, stats} from "../util"
import Select from "react-select"

import { useNavigate, useParams } from "react-router-dom"
import LeaderboardDisplayer from "../components/Leaderboard/LeaderboardDisplayer"


const Leaderboard = (props) => {
    const {leaderboardName} = useParams()
    const navigate = useNavigate()

    const handleLeaderboardChange = (opt) => {
        navigate(`/leaderboards/${opt.value}`)
    }

    return (
        <div className="leaderboard-container">
            <div className="choose-leaderboard">
                {categories.map(category => {
                    return (
                        <Select 
                            className="select"
                            key={category.categoryName}
                            defaultValue={createOption(category.categoryName)}
                            value={createOption(category.categoryName)}
                            options={ createOptions(category.games)}
                            onChange={handleLeaderboardChange}
                            menuPortalTarget={document.body} 
                            styles={{ 
                                menuPortal: base => ({ ...base, zIndex: 1 }),
                                container: provided => ({
                                    ...provided,
                                    width: "190px"
                                }) }}
                    />
                    )
                })}
            </div>
            <LeaderboardDisplayer leaderboardName={leaderboardName} />
        </div>
    )
}

export default Leaderboard