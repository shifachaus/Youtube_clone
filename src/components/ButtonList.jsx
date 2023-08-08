import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Sports", "News", "Cooking"];
const ButtonList = () => {
  return (
    <div className="flex pt-14  items-center md:pt-10 ">
      {list.map((item, index) => (
        <Button key={index} name={item} index={index} />
      ))}
    </div>
  );
};

export default ButtonList;
