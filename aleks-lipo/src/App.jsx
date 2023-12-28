import MainNavbar from "./components/MainNavbar";
import "./App.css";
import MainFooter from "./components/MainFooter";
import MainTimeline from "./components/MainTimeline";
import MainCarusel from "./components/MainCarsusel";
import About from "./components/About";
import { Blockquote } from "flowbite-react";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <>
      <MainNavbar />
      {/* <Button>Click me</Button> */}
      <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
        Matthew 7:12 “In everything, therefore, treat people the same way you
        want them to treat you, for this is the Law and the Prophets. "
      </Blockquote>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-[2em] mb-[2em]">
        <MainCarusel />
        <MainTimeline />
        <About />
        <InfoSection />
      </div>

      <MainFooter />
    </>
  );
}

export default App;
