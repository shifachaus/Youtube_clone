const Button = ({ name, index }) => {
  return (
    <div>
      <button
        className={`px-5 py-2 m-2 ${
          index === 0 ? "bg-white text-black font-normal" : "bg-gray-900"
        }  rounded-lg text-sm font-medium`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
