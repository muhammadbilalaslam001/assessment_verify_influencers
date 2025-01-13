import KeyMetrics from "../pages/influencer/components/KeyMetrics"
import MainSection from "../pages/influencer/components/MainSection"
import ProfileSection from "../pages/influencer/components/ProfileSection"

const InfluencerView=()=>{
    return(
        <div className="flex flex-col gap-7 px-7 py-5">
            <ProfileSection/>
            <KeyMetrics/>
            <MainSection/>
        </div>
    )
}

export default InfluencerView