const Button = ({ name, index }) => {
  return (
    <div className="  ">
      <button
        className={`px-3  py-[.4rem] ml-3 whitespace-nowrap  ${
          index === 0
            ? "bg-white text-black font-normal "
            : "bg-zinc-800 text-neutral-200 hover:bg-neutral-700"
        }  rounded-lg text-sm font-medium `}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
