import { useState } from "react";
import ScientificJournalBox from "./ScientificJournalBox";

const SCIENTIFIC_JOURNAL = [
  {
    text: "PubMed Central",
  },
  {
    text: "Nature",
  },
  {
    text: "Science",
  },
  {
    text: "Cell",
  },
  {
    text: "The Lancet",
  },
  {
    text: "New England Journal of Medicine",
  },
  {
    text: "JAMA Network",
  },
];

const ScientificJournal=()=>{
    const [isActive,SetIsActive]=useState<Array<number>>([])

    const handleSelect = (index:number) => {
        SetIsActive((prevActive) => {
            if (prevActive.includes(index)) {
              return prevActive.filter((item) => item !== index);
            } else {
              return [...prevActive, index];
            }
        });
    };

    const handleSelectAll = () => {
     const newActiveIndices = SCIENTIFIC_JOURNAL.map((_, index) => index); 
     SetIsActive(newActiveIndices); 
    };

    const handleDeSelectAll=()=>{
      SetIsActive([])
    }

    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Scientific Journals</p>
          <div className="flex gap-3">
            <p
              className="text-[#448B6D] cursor-pointer"
              onClick={handleSelectAll}
            >
              Select All
            </p>
            <p
              className="text-[#448B6D] cursor-pointer"
              onClick={handleDeSelectAll}
            >
              Deselect All
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SCIENTIFIC_JOURNAL.map((item, index) => (
            <ScientificJournalBox
            key={index}
              text={item.text}
              is_active={isActive.includes(index)}
              onClick={() => {
                handleSelect(index);
              }}
            />
          ))}
        </div>
        <div className="flex justify-start items-center gap-3 cursor-pointer">
          <p className="text-[#4E9B71] text-2xl">+</p>
          <p className="text-[#4E9B71]">Add New Journal</p>
        </div>
      </div>
    );
}

export default ScientificJournal