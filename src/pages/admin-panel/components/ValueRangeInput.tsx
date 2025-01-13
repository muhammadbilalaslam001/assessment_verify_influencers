import React, { useState } from "react";

interface ValueRangeInputProps{
  value:number | undefined,
  onValueChange:(value:number | undefined)=>void
}

const ValueRangeInput:React.FC<ValueRangeInputProps> = ({value,onValueChange}) => {
  // const [value, setValue] = useState<number | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  const handleBlur = () => {
    if (value !== undefined && isNaN(value)) {
      setError(true)  
    } else {
      setError(false)
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="string"
        className=" h-11 w-full bg-[#101827] text-lg border-[1px] border-[#656C78] rounded-md px-10"
        value={value ?? ""}
        onChange={(e) => {
          const inputValue = e.target.value;

          if (inputValue === "" || !isNaN(Number(inputValue))) {
            onValueChange(
              inputValue === "" ? undefined : parseInt(inputValue, 10)
            );
            setError(false);
          } else {
            setError(true);
          }
        }}
        onBlur={handleBlur}
      />
      {error && (
        <p className="text-base text-red-500">Error: Enter a valid integer</p>
      )}
    </div>
  );
};

export default ValueRangeInput;
