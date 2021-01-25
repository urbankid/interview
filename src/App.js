import Content from "./assets/content.json";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Info from "./components/Info";
import PageFooter from "./components/PageFooter";

function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Hero data={Content.modules[0]} />

      <main className="max-w-screen-2xl mx-auto p-10 md:p-20">
        <Title data={Content.modules[1]} />

        <div className="md:flex mb-10 md:mb-20">
          <div className="mb-10 md:mb-0 md:pr-20 lg:text-2xl flex flex-col justify-end">
            <p>{Content.modules[2].text[0].body}</p>
          </div>
          <div className="md:max-w-4xl">
            <img
              src={
                require("./assets/" + Content.modules[2].image.file)["default"]
              }
              alt="Alle tilsette september 2020"
            />
          </div>
        </div>

        <div className="md:flex">
          <div className="mb-10 md:mb-0 md:pl-20 order-2 md:order-2 lg:text-2xl">
            <h2 className="font-hind text-3xl lg:text-5xl mb-5">
              {Content.modules[3].text[0].title}
            </h2>
            <p className="mb-5">{Content.modules[3].text[0].body}</p>
          </div>
          <div className="max-w-4xl order-1 md:order-1">
            <img
              src={
                require("./assets/" + Content.modules[3].image.file)["default"]
              }
              alt="Utsikt"
            />
          </div>
        </div>
      </main>

      <footer className="bg-blue">
        <Info data={Content.modules[4]} />
        <PageFooter data={Content.modules[5]} />
      </footer>
    </div>
  );
}

export default App;
