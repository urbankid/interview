const PageFooter = (props) => {
  return (
    <div className="bg-black text-white lg:text-2xl">
      <div className="md:flex justify-between max-w-screen-2xl mx-auto p-10 pb-20 md:p-20 md:pb-40">
        <div className="md:order-2">
          <a href="https://www.grensesnitt.no">
            <img
              src={
                require("../assets/" + props.data.center[0].image.file)[
                  "default"
                ]
              }
              className="w-full"
              alt="Grensesnitt"
            />
          </a>
        </div>
        <div className="mt-10 md:mt-0 md:order-1">
          <span className="font-bold">{props.data.left[0].text[0].title}</span>
          <br />
          {props.data.left[0].text[1].body}
          <br />
          {props.data.left[0].text[2].body}
          <br />
          {props.data.left[0].text[3].body}
          <br />
        </div>
        <div className="mt-10 md:mt-0 md:text-right md:order-3">
          <span className="font-bold">{props.data.right[0].text[0].title}</span>
          <br />
          <a
            href="mailto:{props.data.right[0].text[1].body}"
            className="hover:underline"
          >
            {props.data.right[0].text[1].body}
          </a>
          <br />
          <a href="tel:{props.data.right[0].text[2].body}">
            {props.data.right[0].text[2].body}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
