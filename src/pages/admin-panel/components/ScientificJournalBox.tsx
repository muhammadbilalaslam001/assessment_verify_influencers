interface ScientificJournalBoxProps{
    text:string,
    is_active:boolean
    onClick:()=>void
}

const ScientificJournalBox:React.FC<ScientificJournalBoxProps>=({text,is_active,onClick})=>{
    const radioBtnBgColor = is_active ? "#5FBB82" : "#101827"; 
    const boxBgColor = is_active ? "#173439" : "#101827";
    const boxBorderColor = is_active ? "#4E9B71" : "#374151"; 

    return (
      <div className="relative h-11 bg-[1px] cursor-pointer" onClick={onClick}>
        <p
          className="h-full w-full flex items-center bg-[#101827] text-base border-[1px] border-[#656C78] rounded-md px-10"
          style={{
            backgroundColor: boxBgColor,
            borderColor: boxBorderColor,
          }}
        >
          {text}
        </p>
        <div
          className="absolute right-3 top-3 w-5 h-5 rounded-full cursor-pointer border-[1px] border-[#656C78]"
          style={{ backgroundColor: radioBtnBgColor }}
        />
      </div>
    );
}

export default ScientificJournalBox