const Skilllist = ({
    iconURL,
    skill,
    level,
}) => {
  return (
    <div className="flex flex-row h-fit p-[0.5rem] cursor-pointer leading-[13px] gap-5 items-center text-left text-wrap w-full max-sm:scale-85 max-sm:gap-2">
      {iconURL && (
        <img src={iconURL} alt="icon" className="w-[35px] h-[35px] "/>
      )}
      <div className="w-full min-h-[fit-content] flex flex-col items-start overflow-auto break-words hide-scrollbar">
        <h1 className="font-bold text-xl normal-case max-w-[100%] max-sm:text-base">{skill}</h1>
        <span className="text-gray-700 leading-4">{level}</span>
      </div>
    </div>
  );
};

export default Skilllist;
