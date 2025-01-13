import User from "../../../assets/user.svg"

const KEYWORDS = [
  {
    text: "Neuroscience",
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
    text: "Stress Management",
  },
  {
    text: "Exercise Science",
  },
  {
    text: "Light Exposure",
  },
  {
    text: "Circadian Biology",
  },
];

const ProfileSection=()=>{
    return (
      <div className="flex items-center gap-6">
        <img src={User} className="w-24 h-24" />
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold">Andrew Huberman</p>
          <div className="flex gap-4">
            {KEYWORDS.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-3xl bg-[#1F2837]"
              >
                {item.text}
              </div>
            ))}
          </div>
          <p className="w-[39%] text-[#999FAB]">
            Stanford Professor of Neurobiology and Ophthalmology, focusing on
            neural development, brain plasticity, and neural regeneration. Host
            of the Huberman Lab Podcast, translating neuroscience into practical
            tools for everyday life. Known for evidence-based approaches to
            performance, sleep, stress management, and brain optimization.
          </p>
        </div>
      </div>
    );
}

export default ProfileSection