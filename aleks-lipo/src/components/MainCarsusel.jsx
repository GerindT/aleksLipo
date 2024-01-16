import { Carousel } from "flowbite-react";

function MainCarusel() {
  return (
    <div className="h-56 sm:h-[85vh] xl:h-[90vh] 2xl:h-[50vh] flex self-center ">
      <Carousel slideInterval={2500}>
        {Array(10)
          .fill()
          .map((_, i) => (
            <img key={i} src={`carusel/${i + 1}.jpg`} alt="..." />
          ))}
      </Carousel>
    </div>
  );
}
export default MainCarusel;
