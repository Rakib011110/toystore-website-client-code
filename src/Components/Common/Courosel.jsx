import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Courosel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const cards = [
    {
      id: 1,
      title: "Card 1",
      img: "https://assets1.lottiefiles.com/packages/lf20_42kpqpHRFU.json",

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Card 2",
      img: "https://assets2.lottiefiles.com/packages/lf20_wxu55sii.json",

      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Card 3",
      img: "https://assets3.lottiefiles.com/packages/lf20_fgvmiyev.json",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title: "Card 3",
      img: "https://assets1.lottiefiles.com/packages/lf20_8NYY2Y.json",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 5,
      title: "Card 3",
      img: "https://assets1.lottiefiles.com/packages/lf20_42kpqpHRFU.json",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 6,
      title: "Card 3",
      img: "https://assets1.lottiefiles.com/packages/lf20_swnrn2oy.json",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 7,
      title: "Card 3",
      img: "https://assets4.lottiefiles.com/packages/lf20_biyiluyz.json",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },

    // Add more card objects as needed
  ];
  return (
    <div>
      <div className="container mx-auto mt-20">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {cards.map((card) => (
            <div className="p-4" key={card.id}>
              <div className="">
                <Player
                  className=" w-72 rounded-xl  gap-5 h-24 object-cover  mb-4 sm:w-[300px] sm:h-[200px]"
                  autoplay
                  loop
                  src={card.img}
                  // style={{ height: "500px", width: "700px" }}
                ></Player>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Courosel;
