import { useState } from "react";
import TimeRange from "./TimeRange";
import ValueRangeInput from "./ValueRangeInput";
import InputBox from "../../../components/InputBox";
import SwitchChecks from "./SwitchChecks";


const SWITCH_CHECKS=[
  {
    title:"Include Revenue Analysis",
    description:"Analyze monetization methods and estimate earnings"
  },
  {
    title:"Verify with Scientific Journals",
    description:"Cross-reference claims with scietific literatures"
  }
]
const ResearchCriteria=()=>{
    const [product, setProduct] = useState<number | undefined>(undefined);
    const [claims, setClaims] = useState<number | undefined>(undefined);
    const [name,setName]=useState('')
    
    return (
      <div className="w-full flex justify-evenly gap-7">
        <div className="w-full flex flex-col gap-4">
          <TimeRange />
          <div className="flex flex-col gap-2">
            <p className="text-">Influencer Name</p>
            <InputBox
              name={name}
              description="Enter influencer name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Claims to analyze per influencer</p>
            <ValueRangeInput
              value={claims}
              onValueChange={(value) => {
                setClaims(value);
              }}
            />
            <p className="text-[#656C78]">
              Recommended: 50-100 claims for comprehensive analysis
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2=1">
            <p>Products to find per influencer</p>
            <ValueRangeInput
              value={product}
              onValueChange={(value) => {
                setProduct(value);
              }}
            />
            <p className="text-[#656C78]">Set to 0 to skip product research</p>
          </div>
          <div className="w-full flex flex-col gap-5">
            {SWITCH_CHECKS.map((item, index) => (
              <SwitchChecks
                key={index}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default ResearchCriteria