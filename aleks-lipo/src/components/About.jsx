import { Button, Card } from "flowbite-react";
import React from "react";
import MainModal from "./MainModal";
import { useContext } from "react";
import { LangContext } from "../App";
import { en, al } from "../helper/lang";

function About() {
  const [openModal, setOpenModal] = React.useState(false);
  const lang = useContext(LangContext);
  return (
    <div
      id="about"
      className="flex flex-row justify-self-center md:justify-center items-center max-w-sm md:max-w-full "
    >
      <Card
        className="max-w-sm md:max-h-[300px]  cursor-pointer  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
        horizontal
        imgSrc="/profile.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === "al" ? al.About.Title : en.About.Title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {lang === "al" ? al.About.Text : en.About.Text}
        </p>
        <div className="flex justify-center">
          <Button
            className="w-[50%] "
            outline
            color="gray"
            onClick={() => setOpenModal(true)}
          >
            {lang === "al" ? al.About.Button : en.About.Button}
          </Button>
        </div>
      </Card>
      <MainModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={lang === "al" ? al.About.Button : en.About.Button}
        content={lang === "al" ? al.About.Content : en.About.Content}
      />
    </div>
  );
}

export default About;
