import Carousel from "react-bootstrap/Carousel";
import pic from "./../assets/images/Heroimage.JPG";
import img1 from "./../assets/images/campus_life.JPG";
import img2 from "./../assets/Event/Tarunye8.jpg";
import img3 from "./../assets/Event/Exibition-4.jpg";

function DarkVariantExample() {
  // Define an array of carousel items
  const carouselItems = [
    {
      src: img1,
      alt: "First slide",
      caption: {},
    },
    {
      src: img2,
      alt: "Second slide",
      caption: {},
    },
    {
      src: img3,
      alt: "Third slide",
      caption: {},
    },
  ];

  return (
    <div className="px-2 lg:w-1/2">
      <Carousel data-bs-theme="dark">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block  " src={item.src} alt={item.alt} />

            <Carousel.Caption>
              <h5>{item.caption.title}</h5>
              <p>{item.caption.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
