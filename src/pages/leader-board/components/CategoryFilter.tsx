interface CategoryFilterProps {
  filterData: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  filterData,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`px-4 py-2 rounded-3xl cursor-pointer ${
        isActive ? "bg-[#5FBB82]" : "bg-[#1F2837]"
      }`}
      onClick={onClick}
    >
      {filterData}
    </div>
  );
};

export default CategoryFilter;
