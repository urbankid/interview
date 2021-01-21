import code from "./assets/code-1500.jpg";
import logo from "./assets/logo-white-colors.svg";
import team from "./assets/grensesnitt-alle-tilsette-sept-2020.jpg";
import sky from "./assets/view.jpg";
import recruitment from "./assets/recruitment-icon.svg";

function App() {
  return (
    <div className="bg-white font-sans">
      <header className="grid grid-cols-1 h-80 sm:h-96 md:h-100">
        <div className="relative z-10 col-start-1 row-start-1 bg-gradient-to-t from-black flex justify-center">
          <img src={logo} className="w-1/2" alt="Grensesnitt" />
        </div>
        <div className="col-start-1 row-start-1 flex">
          <div className="w-full grid">
            <div className="relative">
              <img
                src={code}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Code view in laptop"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-screen-2xl mx-auto p-20">
        <h1 className="font-hind text-5xl md:text-7xl text-center mb-20">
          Vi lager grensesnitt som folk elsker.
        </h1>
        <div className="md:flex mb-20">
          <div className="mb-20 md:mb-0 md:pr-20 lg:text-2xl">
            <p className="mb-5">
              Grensesnitt er Bjørnar, Vegard, Martha, Hege og Bjørn. Vi blir
              glade av å hjelpe deg med å få en enklere og mer effektiv hverdag.
            </p>
            <p>
              Dette gjør vi gjennom å utvikle mobilapper, webbaserte
              applikasjoner og å bygge komponentbaserte nettsider. Vi
              samarbeider med dyktige designere som lar oss utforme spennende og
              krevende nettsider og webapplikasjoner.
            </p>
          </div>
          <div className="md:max-w-4xl">
            <img src={team} alt="Alle tilsette september 2020" />
          </div>
        </div>
        <div className="md:flex">
          <div className="mb-20 md:mb-0 md:pl-20 order-2 md:order-2 lg:text-2xl">
            <h2 className="font-hind text-3xl lg:text-5xl mb-5">Om oss</h2>
            <p className="mb-5">
              Vi har kontor i 9. etasje i Høghuset på Bryne og nyter utsikten
              over Jæren når vi ikke kikker konsentrert på skjermene våre.
            </p>
            <p>
              Felles for alt vi gjør er at vi liker å samarbeide med kunder,
              partnere og andre leverandører for å lage ting som er enkle å
              bruke – både for deg og for kunden din.
            </p>
          </div>
          <div className="max-w-4xl order-1 md:order-1">
            <img src={sky} alt="Utsikt" />
          </div>
        </div>
      </main>
      <footer className="bg-blue">
        <div className="max-w-lg md:px-10 md:max-w-4xl mx-auto text-white text-center pb-10">
          <div className="flex justify-center pt-10">
            <img
              src={recruitment}
              className="w-10 md:w-16"
              alt="Recruitment icon"
            />
          </div>
          <h3 className="font-hind text-3xl lg:text-5xl my-5 mx-20 md:mx-0">
            Lyst til å bli en del av Grensesnitt?
          </h3>
          <p className="mx-20 md:mx-0 lg:text-2xl">
            Vi er alltid interessert i å treffe kjekke og flinke folk, så ta
            gjerne kontakt med
            <a
              href="mailto:bjornar@grensesnitt.no"
              className="mx-1 p-1 border-b hover:bg-white hover:text-blue"
            >
              bjornar@grensesnitt.no
            </a>
            om du vil ta en kaffe og en prat.
          </p>
        </div>
        <div className="bg-black text-white lg:text-2xl">
          <div className="md:flex justify-between max-w-screen-2xl mx-auto p-20">
            <div className="md:order-2">
              <img src={logo} className="w-full" alt="Grensesnitt" />
            </div>
            <div className="mt-10 md:mt-0 md:order-1">
              <span className="font-bold">Besøk oss</span>
              <br />
              Høghuset
              <br />
              Forum Jæren, 9. etg.
              <br />
              Hetlandsgata 9, 4344 Bryne
            </div>
            <div className="mt-10 md:mt-0 md:text-right md:order-3">
              <span className="font-bold">Kontakt oss</span>
              <br />
              <a
                href="mailto:bjornar@grensesnitt.no"
                className="hover:underline"
              >
                bjornar@grensesnitt.no
              </a>
              <br />
              +47 911 00 918
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
