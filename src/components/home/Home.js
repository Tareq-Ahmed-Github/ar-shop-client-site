import React from "react";
import Contact from "../contact/Contact";
import HBanner from "./HBanner";
import HomeServices from './HomeServices';
import UpcomingProds from './UpcomingProds';

const Home = () => {
  return (
    <div>
      <HBanner></HBanner>
      <HomeServices></HomeServices>
      <UpcomingProds/>
      <Contact></Contact>
    </div>
  );
};

export default Home;
