import React from 'react'
import heropix from "./img/hero1.png"
import cv from './img/cv.pdf'

const Hero = () => {
  return (
   <>
        <section class="w-full  h-auto"id="home">
        <div class="container mb-12 lg:mb-0  mx-auto">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2  w-full text-center lg:text-left flex items-center order-2 lg:order-1">
                    <div class="w-full">

                        <div>
                            <h4 class=" text-[#fcba03] lg:text-xl text-1xl mb-3 lg:mb-0 px-5">Hello,my name is</h4>
                        </div>
                        <div>
                            <h1 class=" text-white lg:text-7xl text-5xl px-5 lg:mb-2 mb-3">INAM <span class="name">UL HAQ</span></h1>


                        </div>

                        <div class="mb-8">
                            <h3 class="lg:text-2xl text-1xl text-white font-bold  px-5 ">I'am a Web Developer</h3>


                        </div>
                        <div>
                            <a    
                            href='https://drive.google.com/file/d/1ntxqIe-XKc_COwM_Gysml5R9PSCAVDBi/view?usp=sharing'
                            target='_blank' 
                                class="  hover:bg-[#fcba03] cursor-pointer hover:text-white text-[#fcba03] border border-[#fcba03] rounded lg:ml-6 py-2 px-4">

                                DOWNLOAD CV
                            </a>
                        </div>
                    </div>

                </div>
                <div class="lg:w-1/2 order-1 lg:order-2  mb-12 lg:mb-0 p-3 lg:p-0">
                    <img class="w-full" src={heropix} />
                </div>

            </div>

        </div>
    </section>
   </>
  )
}

export default Hero