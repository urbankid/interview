const Hero = (props) => {
  return (
    <header className="grid grid-cols-1 h-80 sm:h-96 md:h-100 lg:h-110 xl:120">
      <div className="relative z-10 col-start-1 row-start-1 bg-gradient-to-t from-black flex justify-center h-full">
        <a
          href="https://www.grensesnitt.no"
          className="flex justify-center w-full"
          title="Grensesnitt"
        >
          <img
            src={
              require("../assets/" + props.data.overlay[0].image.file)[
                "default"
              ]
            }
            className="mx-10 md:w-100"
            alt="Grensesnitt"
          />
        </a>
      </div>
      <div className="col-start-1 row-start-1 flex">
        <div className="w-full grid">
          <div className="relative">
            <img
              src={require("../assets/" + props.data.image.file)["default"]}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Code view in laptop"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
