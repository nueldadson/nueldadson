const SkillTab = ({
  label,
  iconURL,
  description1,
  description2,
}) => {
  return (
    <div className="flex flex-col w-[210px] h-[fit-content] border-[1.5px] border-gray-500 rounded-[2rem] p-[1rem] cursor-pointer items-center leading-[18px]">
      {iconURL && (
        <img src={iconURL} alt="icon" className="w-[2rem] mb-1" />
      )}
      <h1 className="font-bold text-xl normal-case">{label}</h1>
      <span className="text-gray-700">{description1}<br /> {description2}</span>
    </div>
  );
};

export default SkillTab;
