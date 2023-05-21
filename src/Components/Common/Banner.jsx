import React from "react";
import Courosel from "../Common/Courosel";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeBanner = () => {
  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 1000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
  };

  // Image data array
  const imageData = [
    {
      id: 1,
      src: "https://m.media-amazon.com/images/I/71Nm1Y4dX5L._SX569_.jpg",
      alt: "Slider Item 1",
    },
    {
      id: 2,
      src: "https://m.media-amazon.com/images/I/71bZw6n0DKL.jpg",
      alt: "https://media.4rgos.it/s/Argos/9114629_R_SET?$Main768$&w=620&h=620",
    },
    {
      id: 3,
      src: "https://media.4rgos.it/s/Argos/9114629_R_SET?$Main768$&w=620&h=620",
      alt: "Slider Item 3",
    },
  ];
  return (
    <div>
      <div className="mt-5">
        <div className="flex  mx-auto flex-col md:flex-row ">
          <div className="md:w-1/2">
            <a href="#" className="group relative block bg-black">
              <img
                alt="Developer"
                src="https://thumbs.dreamstime.com/b/surprised-child-promotional-background-young-girl-attractive-option-shocked-impressed-showing-pointing-finger-invisible-brand-202159652.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                  WELCOME TO
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  <span className="">Toy </span> STORE{" "}
                </p>

                <div className="mt-64 sm:mt-64 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
                <Player
                  className=" rounded-lg mb-4 sm:w-[300px] sm:h-[125px]"
                  autoplay
                  loop
                  src="https://assets1.lottiefiles.com/packages/lf20_42kpqpHRFU.json"
                  // style={{ height: "500px", width: "700px" }}
                ></Player>
                <div>
                  <h1 className="text-2xl font-bold text-red-600">
                    {" "}
                    CHOOSE YOUR FAVOURITEBABY TOYS
                  </h1>
                </div>
              </div>
            </a>
          </div>

          <div className="md:w-1/2 ">
            <a href="#" className="group relative block bg-black">
              <div className="relative p-4 sm:p-6 lg:p-8">
                <div>
                  <div className="w-full ">
                    <Carousel
                      responsive={carouselResponsive}
                      autoPlay
                      autoPlaySpeed={3000} // Adjust the speed as per your requirement
                      infinite
                      draggable
                      swipeable
                    >
                      {imageData.map((image) => (
                        <img
                          className="w-full "
                          key={image.id}
                          src={image.src}
                          alt={image.alt}
                        />
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className=" ">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white"></p>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-red-600">
                    {" "}
                    CHOOSE YOUR FAVOURITEBABY TOYS
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
