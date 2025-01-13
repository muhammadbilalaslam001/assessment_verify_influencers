import React from 'react';
import searchIcon from '../assets/search.png'

interface InputBox {
  name: string;
  description:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox:React.FC<InputBox>=({name,description,onChange})=>{
    return (
      <div className="relative h-11">
        <input
          type="text"
          className="h-full w-full bg-[#101827] text-[#989EAA] text-base border-[1px] border-[#656C78] rounded-md px-10"
          value={name}
          placeholder={description}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <img src={searchIcon} className="absolute left-2 top-2 h-6 w-6 " />
      </div>
    );
}

export default InputBox