import { useState, useEffect } from "react"
import { url, id, boardNamesArr, statNamesArr, playerBoardNames} from "../../context"

import { useFetch } from "../../context"
import LeaderboardTable from "../../components/LeaderboardTable/LeaderboardTable"
import Loading from "../../components/Loading/Loading"
import Select from "react-select"

import "./leaderboard.css"


const Leaderboard = (props) => {
    const [leaderboardData, setLeaderboardData] = useState(null)
    const [boardName, setBoardName] = useState(boardNamesArr[0])
    const [statName, setStatName] = useState(statNamesArr[1])
    const [perPage, setPerPage] = useState(25)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/v1/java/leaderboard/DragonEscape/${boardName.value}/${statName.value}/save`)
        .then((res) => res.json())
        .then((data) => {
          setLeaderboardData(data)
          setLoading(false)
          })
        .catch(err => console.log(err))
    }, [boardName, statName])

    return (
        <div className="leaderboard-container">
            <div className="search-controls">
                <Select 
                    className="select"
                    defaultValue={boardName} 
                    value={boardName}
                    onChange={setBoardName} 
                    options={boardNamesArr}
                    isSearchable={false}
                    menuPortalTarget={document.body} 
                    styles={{ menuPortal: base => ({ ...base, zIndex: 0 }) }}
                />
                <Select 
                    className="select"
                    defaultValue={statName} 
                    value={statName}
                    onChange={setStatName} 
                    options={statNamesArr}
                    isSearchable={false}
                />
            </div>
            {
                loading ? 
                <Loading /> :
                <LeaderboardTable entries={leaderboardData.entries} perPage={perPage} queryChanger={props.queryChanger} />
            }
        </div>
    )
}

export default Leaderboard