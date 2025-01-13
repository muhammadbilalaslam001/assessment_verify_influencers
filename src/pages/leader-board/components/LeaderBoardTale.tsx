import { Trend, Category, FilterType } from "../../../constants";
import ArrowUpDown from "../../../assets/arrow-up-down.png";
import User from "../../../assets/user.svg";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import {  useNavigate } from "react-router-dom";

const LEADER_BOARD_TABLE = [
  {
    rank: "#1",
    influencer: "Dr. Peter Attia",
    photo: User,
    category: Category.MEDICINE,
    trust_score: "94%",
    trend: Trend.UP,
    followers: "1.2M+",
    verified_claims: 203,
  },
  {
    rank: "#2",
    influencer: "Dr. Rhonda Patrick",
    photo: User,
    category: Category.NUTRITION,
    trust_score: "91%",
    trend: Trend.UP,
    followers: "980K+",
    verified_claims: 156,
  },
  {
    rank: "#3",
    influencer: "Dr. Chris Palmer",
    photo: User,
    category: Category.MENTAL_HEALTH,
    trust_score: "90%",
    trend: Trend.DOWN,
    followers: "180K+",
    verified_claims: 76,
  },
  {
    rank: "#4",
    influencer: "Andrew Huberman",
    photo: User,
    category: "Neuroscience",
    trust_score: "89%",
    trend: Trend.UP,
    followers: "4.2M+",
    verified_claims: 127,
  },
  {
    rank: "#5",
    influencer: "Dr. Dominic D'Agostino",
    photo: User,
    category: Category.NUTRITION,
    trust_score: "89%",
    trend: Trend.DOWN,
    followers: "290K+",
    verified_claims: 112,
  },
  {
    rank: "#6",
    influencer: "Dr. Gabrielle Lyon",
    photo: User,
    category: Category.MEDICINE,
    trust_score: "88%",
    trend: Trend.UP,
    followers: "380K+",
    verified_claims: 84,
  },
  {
    rank: "#7",
    influencer: "Dr. David Sinclair",
    photo: User,
    category: "Longevity",
    trust_score: "87%",
    trend: Trend.UP,
    followers: "1.1M+",
    verified_claims: 145,
  },
  {
    rank: "#5",
    influencer: "Dr. Dominic D'Agostino",
    photo: User,
    category: Category.NUTRITION,
    trust_score: "89%",
    trend: Trend.DOWN,
    followers: "290K+",
    verified_claims: 112,
  },
  {
    rank: "#6",
    influencer: "Dr. Gabrielle Lyon",
    photo: User,
    category: Category.MEDICINE,
    trust_score: "88%",
    trend: Trend.UP,
    followers: "380K+",
    verified_claims: 84,
  },
  {
    rank: "#7",
    influencer: "Dr. David Sinclair",
    photo: User,
    category: "Longevity",
    trust_score: "87%",
    trend: Trend.UP,
    followers: "1.1M+",
    verified_claims: 145,
  },
  {
    rank: "#5",
    influencer: "Dr. Dominic D'Agostino",
    photo: User,
    category: Category.NUTRITION,
    trust_score: "89%",
    trend: Trend.DOWN,
    followers: "290K+",
    verified_claims: 112,
  },
  {
    rank: "#6",
    influencer: "Dr. Gabrielle Lyon",
    photo: User,
    category: Category.MEDICINE,
    trust_score: "88%",
    trend: Trend.UP,
    followers: "380K+",
    verified_claims: 84,
  },
  {
    rank: "#7",
    influencer: "Dr. David Sinclair",
    photo: User,
    category: "Longevity",
    trust_score: "87%",
    trend: Trend.UP,
    followers: "1.1M+",
    verified_claims: 145,
  }
];

const CATEGORY_FILTER = [
  FilterType.ALL,
  FilterType.FITNESS,
  FilterType.MEDICINE,
  FilterType.MENTAL_HEALTH,
  FilterType.NUTRITION,
  FilterType.LONGEVITY,
];

const LeaderBoardTable = () => {
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL);
  const navigate=useNavigate()

  const filteredData =
    activeFilter === FilterType.ALL
      ? LEADER_BOARD_TABLE
      : LEADER_BOARD_TABLE.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          {CATEGORY_FILTER.map((filter, index) => (
            <CategoryFilter
              key={index}
              filterData={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
        <div className="rounded-md flex items-center gap-2 bg-[#1F2837] py-2 px-4 cursor-pointer">
          <img src={ArrowUpDown} className="w-4 h-4" alt="Sort Icon" />
          <p>Highest First</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-2 border-[#343E4E] rounded-md">
          <thead className="text-gray-400 bg-[#1B2432] text-base uppercase">
            <tr>
              <th className="px-4 py-3">RANK</th>
              <th className="px-4 py-3">INFLUENCER</th>
              <th className="px-4 py-3">CATEGORY</th>
              <th className="px-4 py-3">TRUST SCORE</th>
              <th className="px-4 py-3">TREND</th>
              <th className="px-4 py-3">FOLLOWERS</th>
              <th className="px-4 py-3">VERIFIED CLAIMS</th>
            </tr>
          </thead>
          <tbody className="bg-[#17212F] divide-y divide-gray-700">
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-4 font-medium">{item.rank}</td>
                <td className="px-4 py-4 flex items-center gap-3 cursor-pointer"
                onClick={()=>{navigate('/influencer')}}>
                  <img
                    src={item.photo}
                    alt={`${item.influencer}'s avatar`}
                    className="w-10 h-10 rounded-full border border-gray-500"
                  />
                  <span>{item.influencer}</span>
                </td>
                <td className="px-4 py-4">{item.category}</td>
                <td className="px-4 py-4">{item.trust_score}</td>
                <td
                  className={`px-4 py-4 font-medium ${
                    item.trend === Trend.UP ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.trend === Trend.UP ? "↑" : "↓"}
                </td>
                <td className="px-4 py-4">{item.followers}</td>
                <td className="px-4 py-4">{item.verified_claims}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardTable;

