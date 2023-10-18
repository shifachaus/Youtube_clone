import { FaRegUserCircle } from "react-icons/fa";
import { useUserContext } from "../context/user_context";

const LoginButton = () => {
  const { loginWithRedirect, myUser } = useUserContext();
  console.log(myUser);
  return (
    <div className=" flex gap-2 items-center  border border-neutral-700 px-2 py-1 md:py-[0.4rem] md:px-[0.8rem]  hover:bg-sky-950 hover:border-sky-950   rounded-full cursor-pointer">
      <span>
        <FaRegUserCircle className="text-sky-500  text-xl " />
      </span>
      <button
        onClick={loginWithRedirect}
        className="text-sky-500 font-medium text-md tracking-tighter"
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;
