import { useState, useContext } from "react";
import { SetLangContext } from "../App";
import { Avatar, Navbar } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { IoIosJournal } from "react-icons/io";
import { FaRoad, FaFontAwesomeFlag, FaFlagUsa } from "react-icons/fa";

function MainNavbar() {
  const [isChecked, setIsChecked] = useState(false);
  const setLang = useContext(SetLangContext);
  const handleCheckboxChange = () => {
    isChecked ? setLang("al") : setLang("en");
    setIsChecked(!isChecked);
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#about">
        <Avatar alt="User settings" img="/profile.jpg" rounded />
        <span className="self-center whitespace-nowrap text-xl font-normal ml-4 ">
          Aleks Lipo
        </span>
      </Navbar.Brand>
      <div className=" flex-wrap gap-2 hidden md:flex">
        <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              !isChecked ? "text-primary bg-teal-50" : "text-body-color"
            }`}
          >
            <FaFontAwesomeFlag className={`mr-[6px] h-4 w-4  `} />
            AL
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              isChecked ? "text-primary bg-teal-50" : "text-body-color"
            }`}
          >
            <FaFlagUsa className={`mr-[6px] h-4 w-4  `} />
            EN
          </span>
        </label>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse className=" md:hidden">
        <Navbar.Link href="#about">
          <div className="flex flex-row self-center items-center justify-center">
            <HiUserCircle className="mr-3 h-4 w-4" />
            {isChecked ? "Rreth meje" : "About"}
          </div>
        </Navbar.Link>

        <Navbar.Link href="#journey">
          <div className="flex flex-row self-center items-center justify-center">
            <FaRoad className="mr-3 h-4 w-4" />
            {isChecked ? "Rrugëtimi im" : "My journey"}
          </div>
        </Navbar.Link>
        <Navbar.Link href="#">
          <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md  p-1">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                !isChecked ? "text-primary bg-teal-50" : "text-body-color"
              }`}
            >
              <FaFlagUsa className={`mr-[6px] h-4 w-4  `} />
              EN
            </span>
            <span
              className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                isChecked ? "text-primary bg-teal-50" : "text-body-color"
              }`}
            >
              <FaFontAwesomeFlag className={`mr-[6px] h-4 w-4  `} />
              Al
            </span>
          </label>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
