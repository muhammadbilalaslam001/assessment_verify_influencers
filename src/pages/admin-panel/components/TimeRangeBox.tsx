import React from "react"

interface TimeRangeBoxProps{
    text:string,
    is_active:boolean
    onClick:()=>void
}

const TimeRangeBox:React.FC<TimeRangeBoxProps>=(
    {text,is_active,onClick}
)=>{
    const bgColor = is_active ? "#173439" : "#101827"; 
    const borderColor = is_active ? "#4E9B71" : "#374151"; 
    const textColor = is_active ? "#5EBA8A" : "#808793";
    return (
      <div
        className="w-full h-11 rounded-md  border-[1px] flex flex-col items-center justify-center cursor-pointer"
        style={{ backgroundColor: bgColor, borderColor: borderColor }}
        onClick={onClick}
      >
        <p 
           className="text-base"
           style={{color:textColor}}>
            {text}</p>
      </div>
    );
}

export default TimeRangeBox