const Comment = ({ data }) => {
  console.log(data);
  const { name, text, replies } = data;
  return (
    <div>
      <h3 className="font-medium">{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
