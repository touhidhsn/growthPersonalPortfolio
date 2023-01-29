import React, { useState } from "react";
import logo from "./img/logo300x79.png";
import "../index.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "PRICES", link: "/" },
    { name: "SHOP", link: "/" },
    { name: "BLOGS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <section className='drop-shadow w-full left-0 top-0 bg-[#1f2336] font-hkgroteskmedium'>
      <div className='md:flex justify-between items-center py-1 md:py-4 text-white container m-auto'>
        <img
          src={logo}
          alt=''
          className='w-[150px] h-[39.66px] md:mx-0  mx-2 my-2'
        />
        <div className='md:hidden absolute right-20 top-3'>
          <Button>
            <a href='/'>LET'S CHAT</a>
          </Button>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-xl absolute right-2 top-3 cursor-pointer md:hidden'>
          <FontAwesomeIcon icon={open ? faClose : faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 asbolute md:bg-transparent bg-gray-900 absolute md:static z-[-1] md:z-auto left-0 w-full md:w-auto transition-all  ease-in 
          ${open ? "top-16" : "top-[-480px]"}`}>
          {navLinks.map((navLinks) => (
            <li className='pl-8 md:pl-0 md:ml-8 py-4 md:py-0 relative after:content-[""] border-gray-600 md:border-none border-b-2 md:after:bg-yellow-400 md:duration-200 md:after:h-0.5 md:after:w-0 md:after:left-0 md:after:-bottom-2 md:after:rounded md:after:absolute md:after:duration-300 md:hover:text-yellow-400 md:hover:after:w-full'>
              <a href={navLinks.link}>{navLinks.name}</a>
            </li>
          ))}
          <div className='hidden md:block p-0'>
            <Button>
              <a href='/'>LET'S CHAT</a>
            </Button>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
