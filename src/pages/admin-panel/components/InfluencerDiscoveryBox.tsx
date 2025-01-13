interface InfluencerDiscoveryBoxProps{
    title:string,
    description:string
    is_active:boolean
    onClick:()=>void
}

const InfluencerDiscoveryBox:React.FC<InfluencerDiscoveryBoxProps>=(
    {title,description,is_active,onClick}
)=>{
    const bgColor = is_active ? "#173439" : "#101827"; 
    const borderColor = is_active ? "#4E9B71" : "#374151"; 
    return (
      <div
        className="w-full h-[86px] border-[1px] flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md"
        style={{ backgroundColor: bgColor,
            borderColor : borderColor
         }}
         onClick={onClick}
      >
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    );
}


export default InfluencerDiscoveryBox