const Info = (props) => {
  return (
    <div className="max-w-lg md:px-12 md:max-w-4xl mx-auto text-white text-center pb-10">
      <div className="flex justify-center pt-10">
        <img
          src={require("../assets/" + props.data.image.file)["default"]}
          className="w-10 md:w-16"
          alt="Recruitment icon"
        />
      </div>
      <h3 className="font-hind text-3xl lg:text-5xl my-5 mx-10 md:mx-0">
        {props.data.text[0].title}
      </h3>
      <p className="mx-10 md:mx-0 lg:text-2xl">{props.data.text[1].body}</p>
    </div>
  );
};

export default Info;
