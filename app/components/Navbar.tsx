"use client";
import { PlayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/logo.svg";
import Image from "next/image";
import ButtonWrapper from "./NeuButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  
  

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-200 fixed nav shadow-lg ">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <Image className="h-16" src={logo} alt="logo" width={300} height={150} />
            </div>
          </a>
        </h1>
      </div>

      
      <div>
        <ButtonWrapper />
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

     
    </div>
  );
};

export default Navbar;
