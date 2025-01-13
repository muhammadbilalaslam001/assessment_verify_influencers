import { useState } from "react";
import TimeRangeBox from "./TimeRangeBox";

const TIME_RANGE = [
  {
    text: "Last Week",
  },
  {
    text: "Last Month",
  },
  {
    text: "Last Year",
  },
  {
    text: "All TIme",
  },
];

const TimeRange=()=>{
    const [isActive,setIsActive]=useState(0)

    return (
        <div className="w-full flex flex-col gap-2">
            <p >Time Range</p>
            <div className="grid grid-cols-2 gap-2">
                {TIME_RANGE.map((item,index)=>(
                    <TimeRangeBox
                    key={index} 
                    text={item.text} 
                    is_active={isActive===index} 
                    onClick={()=>{
                        if(isActive!==index){
                            setIsActive(index)
                        }
                    }}
                    />
                ))}
            </div>
        </div>
    )
}

export default TimeRange