const Button = ({ name, index }) => {
  return (
    <button
      className={`px-3 py-[.4rem]  ${
        index === 0
          ? "bg-white text-black font-normal "
          : "bg-zinc-800 text-neutral-200"
      }  rounded-lg text-sm font-medium `}
    >
      {name}
    </button>
  );
};

export default Button;
