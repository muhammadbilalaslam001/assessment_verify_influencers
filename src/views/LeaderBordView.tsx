import LeaderBoardTable from "../pages/leader-board/components/LeaderBoardTale";
import StatsSummary from "../pages/leader-board/components/StatsSummary";

const LeaderBoardView=()=>{
    return (
      <div className="flex flex-col gap-6 px-7 py-5">
        <p className="text-3xl font-bold">Influencer Trust Leaderboard</p>
        <p className="text-[#9096A2] text-lg w-[47%]">
          Real-time rankings of health influencers based on scietifuc accuracy,
          credibility and transparency, Updated daily using AI-powered analysis.
        </p>
        <StatsSummary/>
        <LeaderBoardTable/>
      </div>
    );
}

export default LeaderBoardView