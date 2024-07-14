import React from 'react'
import axios from 'axios'
export const Header = () => {

  return (
      <div className="w-full bg-dark-blue text-gray">
        <header className="flex justify-between mx-[120px] pt-5 flex-wrap">
          <div className="flex items-center gap-[11px]">
            <img className="w-10" src="./src/assets/icons/Logo.svg" alt="" />
            <p className=""><a href="index.html">WebDev</a></p>
          </div>
          <ul className="flex items-center gap-[55px]">
            <li><a href="#">About me</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>
        <section className="text-center flex flex-col place-items-center mt-28 ">
          <h1 className="text-8xl font-bold w-4/5 mb-10"><span className="text-light-blue">professional</span> development of websites</h1>
          <p className="w-1/3 mb-10">Leading digital developer with solid design and development expertise. We build readymade websites  mobile and applications</p>
          <button className="text-light-blue py-3 px-16 mb-32 bg-btn-blue rounded-2xl transition-all duration-300 hover:brightness-125">
            Services
          </button>
        </section>
      </div>
  )
}


