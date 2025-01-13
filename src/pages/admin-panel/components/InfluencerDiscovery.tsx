import { useState } from "react"
import InfluencerDiscoveryBox from "./InfluencerDiscoveryBox"

const INFLUENCER_DISCOVERY=[
    {
        title:"Specific Influencer",
        description:"Research a known health influencer by name",
    },{
        title:"Discover Now",
        description:"Find and analyze new health influencers"
    }
]
const InfluencerDiscovery=()=>{
    const [isActive,setIsActive]=useState(0)
    return(
        <div className="w-full flex justify-evenly gap-3">
            {INFLUENCER_DISCOVERY.map((item,index)=>(
                <InfluencerDiscoveryBox
                    key={index}
                    title={item.title}
                    description={item.description}
                    is_active={isActive === index} 
                    onClick={()=>{
                        if(isActive!==index){
                            setIsActive(index)
                        }} }
                />
            )) }
        </div>
    )
}

export default InfluencerDiscovery