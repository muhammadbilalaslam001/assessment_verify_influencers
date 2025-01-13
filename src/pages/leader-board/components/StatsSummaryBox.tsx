
interface StatsSummaryProps{
    numerics:string,
    title:string
}

const StatsSummaryBox:React.FC<StatsSummaryProps>=({numerics,title})=>{
    return (
      <div className="w-full h-28 p-5 flex flex-col gap-3 bg-[#17212F] border-2 border-[#374151] rounded-md">
        <p className="text-2xl font-bold">{numerics}</p>
        <p className="text-lg text-[#989EAA]">{title}</p>
      </div>
    );
}

export default StatsSummaryBox