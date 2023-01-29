import React from "react";
import "../index.css";
import bgImgUrl from "./img/homebg.png";
import heroImg from "./img/hero.png";

const Featured = () => {
  return (
    <section
      className='w-full h-screen bg-auto bg-left-bottom bg-no-repeat bg-[#1f2336] font-hkgrotesk'
      style={{ backgroundImage: `url(${bgImgUrl})` }}>
      <div className='container m-auto flex text-white h-full '>
        <div className='h-screen items-center w-full flex'>
          <div className='w-1/2 relative'>
            <h4 className='text-yellow-400 text-[40px] font-hkgroteskmedium'>
              Hello, I'm
            </h4>
            <h1 className='text-[100px] leading-[100px] font-playfairdisplay'>
              Christian <br />
              Lopez
            </h1>
            <h2 className='text-[30px] font-hkgroteskmedium pt-6'>
              Product Designer
            </h2>
          </div>
          <div className='w-1/2 '>
            <img src={heroImg} alt='' className='w-11/12 z-10' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
