import React from 'react'
import logo from "./img/logo.png"
const Nav = () => {
  return (
    <>
        <section class="w-full bg-[#191919] sticky top-0 h-auto " >
        <div class="container mx-auto ">
            <nav class="flex items-center  p-3 lg:pl-24 flex-wrap">
                <a href="#" class="p-2 mr-4 inline-flex items-center">
                    <img class="w-1/4" src={logo} />

                </a>
                <button
                    class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                    data-target="#navigation">
                    <i class="material-icons">menu</i>
                </button>
                <div class="hidden top-navbar w-full lg:pr-24 tracking-widest font-bold lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div
                        class="lg:inline-flex lg:flex-row lg:ml-auto   lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                        <a href="#home"
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-white">
                            <span>Home</span>
                        </a>
                        <a href="#About"
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-white">
                            <span>About Us</span>
                        </a>
                        <a href="#Services"
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-white">
                            <span>Services</span>
                        </a>
                        <a href="#Skils"
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-white">
                            <span>Skils</span>
                        </a>

                        <a href="#contect"
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-white">
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </section>
    </>
  )
}

export default Nav