interface SwitchChecksProps{
    title:string
    description:string,
    index:number
}

const SwitchChecks:React.FC<SwitchChecksProps>=({title,description,index})=>{
    return (
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-lg">{title}</p>
          <p className="text-sm text-[#989EAA]">{description}</p>
        </div>

        <div className="flex items-center space-x-2">
          <label
            htmlFor={`switch-${index}`}
            className="relative cursor-pointer"
          >
            <input
              type="checkbox"
              id={`switch-${index}`}
              className="sr-only peer"
            />
            <div className="w-11 h-5 bg-gray-300 rounded-full peer-checked:bg-[#5FBB82] transition"></div>
            <div className="absolute top-1 left-1 mr-1 h-3 w-3 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition"></div>
          </label>
        </div>
      </div>
    );
}

export default SwitchChecks