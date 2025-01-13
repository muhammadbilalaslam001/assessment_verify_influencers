const KEY_METRICS = [
  {
    title: "Trust Score",
    numerics: "89%",
    description: "Base on 127 verified claims",
  },
  {
    title: "Yearly Revenue",
    numerics: "$5.0M",
    description: "Estimated earnings",
  },
  {
    title: "Products",
    numerics: "1",
    description: "Recommended products",
  },
  {
    title: "Followers",
    numerics: "4.2M+",
    description: "Total following",
  },
];

const KeyMetrics=()=>{
    return (
      <div className="w-full flex gap-7">
        {KEY_METRICS.map((item, index) => (
          <div
            className="w-full flex flex-col gap-5 p-4 bg-[#17212F] border-2 border-[#374151] rounded-md"
            key={index}
          >
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="text-4xl text-[#6DD49A] font-bold">{item.numerics}</p>
            <p className="text-[#7D8390]">{item.description}</p>
          </div>
        ))}
      </div>
    );
}

export default KeyMetrics
