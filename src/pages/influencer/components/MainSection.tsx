import { useState } from "react"
import { NavOptions, VerificationStatus } from "../../../constants"
import SearchAndFilters from "./SearchAndFilters"
import Claim from "./Claim";

const NAV_OPTIONS=[
    {
        text:NavOptions.CLAIM_ANALYSIS
    },
    {
        text:NavOptions.RECOMMENDED_PRODUCTS
    },
    {
        text:NavOptions.MONETIZATION
    }
]

const CLAIMS = [
  {
    status: VerificationStatus.VERIFIED,
    date: "14/01/2024",
    title:
      "Viewing sunlight within 30-60 minutes of waking enhances cristrol release",
    trust_score: "92%",
    analysis_title:
      "Multiple studies confirm that morning light exposure affects cristrol rhythms. Timing window  supported by research.",
  },
  {
    status: VerificationStatus.VERIFIED,
    date: "14/01/2024",
    title:
      "Viewing sunlight within 30-60 minutes of waking enhances cristrol release",
    trust_score: "92%",
    analysis_title:
      "Multiple studies confirm that morning light exposure affects cristrol rhythms. Timing window  supported by research.",
  },
  {
    status: VerificationStatus.VERIFIED,
    date: "14/01/2024",
    title:
      "Viewing sunlight within 30-60 minutes of waking enhances cristrol release",
    trust_score: "92%",
    analysis_title:
      "Multiple studies confirm that morning light exposure affects cristrol rhythms. Timing window  supported by research.",
  },
  {
    status: VerificationStatus.VERIFIED,
    date: "14/01/2024",
    title:
      "Viewing sunlight within 30-60 minutes of waking enhances cristrol release",
    trust_score: "92%",
    analysis_title:
      "Multiple studies confirm that morning light exposure affects cristrol rhythms. Timing window  supported by research.",
  },
];
const MainSection=()=>{
    const [activeNav,setActiveNav]=useState(0)

    return (
      <div className="flex flex-col gap-6">
        <div className="flex gap-9 border-b-[1px] border-[#5B626F]">
          {NAV_OPTIONS.map((item, index) => (
            <p
              className={`cursor-pointer text-lg ${
                activeNav === index
                  ? "border-b-2 border-[#6DD49A] text-[#6DD49A]"
                  : "text-[#5B626F]"
              }`}
              onClick={() => {
                if (activeNav !== index) {
                  setActiveNav(index);
                }
              }}
              key={index}
            >
              {item.text}
            </p>
          ))}
        </div>
        <SearchAndFilters />
        <p className="text-[#5B626F]">Showing 10 claims</p>
        <div className="w-full flex flex-col gap-5">
          {CLAIMS.map((item,index)=>(
            <Claim key={index} status={item.status} date={item.date} title={item.title} trust_score={item.trust_score} analysis_title={item.analysis_title} />

          ))}
        </div>
      </div>
    );
}

export default MainSection