import React from 'react'
import aboutpix from "./img/about1.png"
const About = () => {
  return (
   <>
          <section class="w-full bg-[#191919] h-auto" id="About">
        <div class="container mx-auto ">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2 imgAnim  w-full  ">
                    <img class="w-full " src={aboutpix} />
                </div>
                <div class="lg:w-1/2 text-center lg:text-left flex items-center">
                    <div>

                        <div class="lg:mb-4 pt-8 pb-4 lg:pb-0">
                            <h1 class=" text-white lg:text-7xl text-6xl font-bold px-5">About Me</h1>
                        </div>
                        <div>
                            <h1 class=" text-1xl text-white font-bold px-5">Developer <span class="name">&
                                    Designer</span></h1>


                        </div>

                        <div class="lg:mb-8 mb-4 lg:w-2/3 lg:p-6 p-8">
                            <p class=" text-sm text-neutral-600 ">i am a front-end web Developer. I can provide clean
                                code and pixel perfect design.I also make the website more & more interactive with web
                                animaction.I can provide clean code and pixel perfect design.</p>


                        </div>
                        <div class="mb-12 lg:mb-0">
                            <button
                                class=" lg:-mt-4  hover:bg-[#fcba03] hover:text-white text-[#fcba03] border border-[#fcba03] rounded lg:ml-6 py-2 px-4">

                                Let's Talk
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default About