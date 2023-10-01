import Button from "./Button";

const list = [
  "All",
  "Music",
  "Dramedy",
  "Bollywood Music",
  "Animated films",
  "Film criticisms",
  "Game shows",
  "Thrillers",
  "Gaming",
  "Cricket",
  "News",
  "Podcasts",
  "Smartphones",
  "Electronic Music",
  "Cars",
  "Action-adventure games",
  "Science",
  "Lessons",
  "Recently uploaded",
];
const ButtonList = () => {
  return (
    <div className="container max-w-7xl mx-auto overflow-scroll no-scrollbar pt-2  flex items-center">
      {list.map((item, index) => (
        <Button key={index} name={item} index={index} />
      ))}
    </div>
  );
};

export default ButtonList;
