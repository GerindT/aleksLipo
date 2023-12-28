import { Card } from "flowbite-react";

function About() {
  return (
    <div
      id="about"
      className="flex flex-row justify-self-center md:justify-center items-center max-w-sm "
    >
      <Card
        className="max-w-[sm] md:max-h-[300px] raunded-[50px] cursor-pointer  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
        horizontal
        imgSrc="/test.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Me
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          consequatur mollitia ipsum deserunt? A perspiciatis beatae praesentium
          omnis harum asperiores modi sunt facilis iste, provident magnam
          officia corporis dolore sed.
        </p>
      </Card>
    </div>
  );
}

export default About;
