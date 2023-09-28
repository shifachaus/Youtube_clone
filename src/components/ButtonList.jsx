import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Sports", "News", "Cooking"];
const ButtonList = () => {
  return (
    <div className="container flex gap-3 pt-4  items-center ">
      {list.map((item, index) => (
        <Button key={index} name={item} index={index} />
      ))}
    </div>
  );
};

export default ButtonList;
