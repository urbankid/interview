const Title = (props) => {
  return (
    <h1 className="font-hind text-5xl md:text-7xl text-center mb-10 md:mb-20">
      {props.data.text[0].title}
    </h1>
  );
};

export default Title;
