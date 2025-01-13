import { useState } from "react";
import InputBox from "../../../components/InputBox";
import ActiveFilters from "../../../assets/active_filters.png"
import DropDown from "./DropDown";

const SEARCH_CATEGORY = [
  {
    text: "All Categories",
  },
  {
    text: "Sleep",
  },
  {
    text: "Performance",
  },
  {
    text: "Hormones",
  },
  {
    text: "Nutition",
  },
  {
    text: "Exercise",
  },
  {
    text: "Stress",
  },
  {
    text: "Cognition",
  },
  {
    text: "Motivation",
  },
  {
    text: "Recovery",
  },
  {
    text: "Mental Health",
  }
];

const VERIFICATION_STATUS=[
    {
        text:"All Statuses"
    },
    {
        text:"Verified"
    },
    {
        text:"Questionable"
    },
    {
        text:"Debunked"
    }
]

const SearchAndFilters=()=>{
    const [claims,setClaims]=useState('')
    const [category,setCategory]=useState(0)
    const [status,setStatus]=useState(0)

    return (
      <div className="flex flex-col gap-6 p-5 bg-[#17212F] rounded-md ">
        <InputBox
          name={claims}
          description="Search claims..."
          onChange={(e) => {
            setClaims(e.target.value);
          }}
        />
        <div className="flex flex-col gap-2">
          <p className="text-[#999FAB]">Categories</p>
          <div className="flex gap-3">
            {SEARCH_CATEGORY.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-3xl cursor-pointer ${
                  category === index
                    ? "bg-[#5FBB82] text-white"
                    : "bg-[#1F2837] text-[#828996]"
                }`}
                onClick={() => {
                  if (category !== index) {
                    setCategory(index);
                  }
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-evenly gap-5">
          <div className="w-full flex flex-col gap-2">
            <p className="text-[#999FAB]">Verification Status</p>
            <div className="flex gap-4">
              {VERIFICATION_STATUS.map((item, index) => (
                <div
                  key={index}
                  className={`px-5 py-3 rounded-lg cursor-pointer  ${
                    status === index
                      ? "bg-[#5FBB82] text-white"
                      : "bg-[#1F2837] text-[#828996]"
                  }`}
                  onClick={() => {
                    if (status !== index) {
                      setStatus(index);
                    }
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-[#999FAB]">Sort By</p>
            <DropDown/>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer items-center">
          <img src={ActiveFilters} className="w-6 h-6" />
          <p className="text-lg text-[#999FAB]">Active Filters:</p>
        </div>
      </div>
    );
}

export default SearchAndFilters