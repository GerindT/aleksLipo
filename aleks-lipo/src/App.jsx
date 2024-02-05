import MainNavbar from "./components/MainNavbar";
import "./App.css";
import MainFooter from "./components/MainFooter";
import MainTimeline from "./components/MainTimeline";
import SecondTimeline from "./components/SecondTimeline";
import MainCarusel from "./components/MainCarsusel";
import About from "./components/About";
import { Blockquote } from "flowbite-react";

import { useState, createContext } from "react";
import { en, al } from "./helper/lang";

export const LangContext = createContext(null);
export const SetLangContext = createContext(null);

function App() {
  const [lang, setLang] = useState("al");

  return (
    <SetLangContext.Provider value={setLang}>
      <LangContext.Provider value={lang}>
        <MainNavbar />
        <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
          {lang === "al" ? al.Quote : en.Quote}
        </Blockquote>
        <div className=" grid grid-cols-1 gap-[2em] mb-[2em]">
          <MainCarusel folder={"carusel"} />
          <MainTimeline />
          <MainCarusel folder={"carusel"} />
          <SecondTimeline />
          <About />
          {/* <InfoSection /> */}
        </div>
        <MainFooter />
      </LangContext.Provider>
    </SetLangContext.Provider>
  );
}

export default App;
