import { Carousel } from "flowbite-react";

function MainCarusel({ folder, length }) {
  return (
    <div className="h-56 sm:h-[85vh] xl:h-[90vh] 2xl:h-[80vh] flex  ">
      <Carousel slideInterval={3000}>
        {Array(length)
          .fill()
          .map((_, i) => (
            <img key={i} src={`${folder}/${i + 1}.jpg`} alt="..." />
          ))}
      </Carousel>
    </div>
  );
}
export default MainCarusel;
