import React from "react";
import ExternalLink from "../../../assets/external_link.png"

interface ClaimProps{
    status:string,
    date:string,
    title:string,
    trust_score:string,
    analysis_title:string
}

const Claim: React.FC<ClaimProps> = ({status,date,title,analysis_title,trust_score}) => {
  return (
    <div className="border-b border-gray-700">
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex gap-4">
          <span className="bg-[#193E3B] text-[#60BD8C] text-xs uppercase font-bold px-3 py-1 rounded-full">
            {status}
          </span>
          <span className="text-sm text-[#7D8390]">{date}</span>
        </div>
        <span className="text-[#60BD8C] font-bold text-xl">{trust_score}</span>
      </div>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <span className="text-[#7D8390] text-sm ml-2">Trust Score</span>
      </div>
        <a href="#" className="text-[#60BD8C]  text-sm mb-4 flex gap-3">
          <p>View Source</p>
          <img src={ExternalLink} className="w-4 h-4" />
        </a>
      <div className="p-3">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold  mb-1">AI Analysis</h3>
          <p className="text-[#7D8390] text-sm">{analysis_title}</p>
          <a href="#" className="text-[#60BD8C]  text-sm mb-4 flex gap-3">
            <p>View Research</p>
            <img src={ExternalLink} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Claim;
