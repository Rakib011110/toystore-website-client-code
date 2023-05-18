import React from "react";
import HomeBanner from "./HomeBanner";
import Courosel from "../Common/Courosel";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>

      <Courosel></Courosel>
      <hr className="border-b-8" />
    </div>
  );
};

export default Home;
