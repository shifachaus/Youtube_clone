import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Sports", "News", "Cooking"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
