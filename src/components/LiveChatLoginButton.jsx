const LiveChatLoginButton = ({ signInWithGoogle }) => {
  return (
    <div className={` flex flex-col items-center gap-2 py-3 w-9/12 mx-auto  `}>
      <button
        onClick={signInWithGoogle}
        className="block rounded-full   w-9/12 mx-auto  bg-neutral-800 cursor-pointer p-[.4rem] text-sm font-medium"
      >
        Sign in to chat
      </button>
      <p className="text-center p-[.4rem] text-xs font-medium text-neutral-300">
        All messages you send will appear publicly
      </p>
    </div>
  );
};

export default LiveChatLoginButton;
