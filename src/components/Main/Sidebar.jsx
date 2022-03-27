import { Link } from "react-router-dom"

const Sidebar = (props) => {
    return (
        <div className="fixed mt-16 h-full bg-gray-500 w-52">
            <div className="flex flex-col z-50">
                <Link to="../leaderboards" className="no-underline text-gray-200 py-[10px] pl-[20px] 
                                        hover:bg-gray-700 hover:text-white hover:transition-all">
                    <i className="fas fa-chart-bar fa-sm"></i>
                    <div className="inline-block pl-[10px]">Leaderboards</div>
                </Link>
                <Link to="../player" className="no-underline text-gray-200 py-[10px] pl-[20px] 
                                        hover:bg-gray-700 hover:text-white hover:transition-all">
                    <i className="fas fa-user fa-sm"></i>
                    <div className="inline-block pl-[15px]">Player Stats</div>
                </Link>
                <Link to="/about" className="no-underline text-gray-200 py-[10px] pl-[20px] 
                                        hover:bg-gray-700 hover:text-white hover:transition-all">
                    <i className="fas fa-question-circle fa-sm"></i>
                    <div className="inline-block pl-[12px]">About</div>
                </Link>
            </div>

        </div>
    )
}

export default Sidebar
