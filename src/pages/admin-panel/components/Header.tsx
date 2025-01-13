import signoutIcon from "../../../assets/signout.png"

const HEADER_DATA = [
  {
    name: "Leaderboard",
    path: "/leader-board",
  },
  {
    name: "Products",
    path: "/",
  },
  {
    name: "Monetization",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
  {
    name: "Admin",
    path: "/",
  },
];
const Header=()=>{
    return (
      <div className="px-36 h-16 flex justify-between items-center border-b-[1px] border-[#17202F]">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#67cb98] to-[#3987E1] bg-clip-text text-transparent cursor-pointer">
          VerifyInfluencers
        </h2>
        <div className="flex items-center gap-8">
          {HEADER_DATA.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-lg font-semibold hover:text-gray-600 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-1">
            <img className="h-6 cursor-pointer" src={signoutIcon} />
            <p className="text-lg font-semibold hover:text-gray-600 cursor-pointer">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    );
}

export default Header