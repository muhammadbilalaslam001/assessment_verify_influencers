import StatsSummaryBox from "./StatsSummaryBox";

const STATS_SUMMARY = [
  {
    numerics: "1,234",
    title: "Active Influencers",
  },
  {
    numerics: "25,431",
    title: "Claims Verified",
  },
  {
    numerics: "85.7%",
    title: "Average Trust Score",
  },
];

const StatsSummary=()=>{
    return(
        <div className="w-full flex gap-8">
            {STATS_SUMMARY.map((item,index)=>(
                <StatsSummaryBox 
                    key={index}
                    numerics={item.numerics}
                    title={item.title}
                />
            ))}
        </div>
    )
}

export default StatsSummary