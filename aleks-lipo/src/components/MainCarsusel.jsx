import { Carousel } from "flowbite-react";

function MainCarusel({ folder }) {
  return (
    <div className="h-56 sm:h-[85vh] xl:h-[90vh] 2xl:h-[70vh] flex  ">
      <Carousel slideInterval={2500}>
        {Array(10)
          .fill()
          .map((_, i) => (
            <img key={i} src={`${folder}/${i + 1}.jpg`} alt="..." />
          ))}
      </Carousel>
    </div>
  );
}
export default MainCarusel;
