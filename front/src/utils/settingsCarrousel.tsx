import { CustomNextArrow, CustomPrevArrow } from "./icons";

export const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 768, // Cuando el ancho sea menor a 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 385, // Cuando el ancho sea menor a 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
