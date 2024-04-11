import React from "react";
// import Header from '../Components/Header'
import { Button } from "semantic-ui-react";
import bgImg from "../img/bgImg.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-40 z-50"></div>
      <img
        src={bgImg}
        alt="bgImg"
        className="relative z-10 min-h-screen bg-center bg-no-repeat bg-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
        <h1 className="uppercase lg:tracking-[14px] tracking-[10px] text-white lg:text-8xl md:text-6xl text-4xl mb-8">
          Our Recipes
        </h1>
        <Button 
        content="Search Recipes" 
        color="blue"
        as={Link}
        to='/recipe'
        size="big"
         />
      </div>
    </div>
  );
}

export default Home;
