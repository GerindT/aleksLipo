import { Carousel } from "flowbite-react";

function MainCarusel({ folder, length }) {
  return (
    <div className="h-56 flex justify-center w-[100%] md:h-[70vh] md:bg-neutral-800 rounded-xl">
      <Carousel slideInterval={3000} className=" md:w-[70vw]  ">
        {Array(length)
          .fill()
          .map((_, i) => (
            <img
              key={i}
              src={`${folder}/${i + 1}.jpg`}
              alt="..."
              className="md:w-[60vw]"
            />
          ))}
      </Carousel>
    </div>
  );
}
export default MainCarusel;
