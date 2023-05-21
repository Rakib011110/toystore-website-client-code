import React, { useEffect } from "react";
import HomeBanner from "./HomeBanner";
import Courosel from "../Common/Courosel";
import Toys from "../ToysCategory/Toys";
import GallerySection from "../Common/GallerySection";
import ParticlesBg from "particles-bg";
import AOS from "aos";
import "aos/dist/aos.css";
import Info from "../Common/Info";
import Gallary from "../Common/Gallary";
import HeaderBanner from "../Common/HeaderBAnner/HeaderBanner";
const Home = () => {
  return (
    <div>
      <ParticlesBg
        className="mx-auto container"
        type="circle"
        bg={true}
        num={5}
      />

      <div>
        {/* <HomeBanner
          data-aos="fade-up"
          data-aos-anchor=".other-element"
        ></HomeBanner> */}

        <HeaderBanner></HeaderBanner>

        <div className="mt-10">
          <Info></Info>
        </div>
        <div className="">
          <Gallary></Gallary>

          <hr className="border-b-1" />
        </div>

        <div className="mt-20">
          <Toys></Toys>
        </div>
        <div>
          <GallerySection data-aos="new-animation"></GallerySection>
        </div>
        <div>
          <Courosel data-aos="new-animation"></Courosel>
          <hr className="border-b-1" />
        </div>
      </div>
      <ParticlesBg
        className="mx-auto container"
        type="ball"
        bg={true}
        num={5}
      />
    </div>
  );
};

export default Home;
