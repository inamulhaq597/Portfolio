import React from 'react'

const Service = () => {
    return (
        <>
            <section class=" w-full h-auto " id="Services">
                <div class="container mx-auto  lg:p-3 mb-24">
                    <div class="w-full text-center  p-6 py-16">
                        <h1 class="text-white lg:text-7xl font-bold text-6xl">Our Services</h1>



 

                    </div>
                    <div class="flex justify-center flex-col lg:flex-row p-4 lg:p-0">

                        <div class=" border-4 border-transparent hover:border-[#fcba03]  w-full px-3 lg:px-0 lg:w-1/4 bg-[#191919] rounded-xl mb-8 lg:mb-0  ">
                            <div class="text-center p-5 pt-9">
                                <i class="fa fa-bars text-4xl text-[#fcba03] " aria-hidden="true"></i>
                            </div>
                            <div class="text-center">
                                <h3 class="text-white text-2xl">Web Development</h3>
                            </div>

                            <div class="p-2  pt-8 text-center">
                                <p class=" text-sm text-neutral-600 ">i am a front-end web Developer. I can provide clean
                                    code and pixel perfect design.I also make the website more & more interactive with web
                                    animaction.I can provide clean code and pixel perfect design.</p>
                            </div>

                            <div class="w-full flex justify-center py-5">
                                {/* <button
                            class="   hover:bg-[#fcba03] hover:text-white text-[#fcba03] border border-[#fcba03] rounded-full py-2 px-4">

                            Read More
                        </button> */}
                                <button class="custom-btn btn-12 "><span>Click!</span><span>Read More</span></button>
                            </div>
                        </div>

                        <div class="border-4 border-transparent hover:border-[#fcba03] px-3 lg:px-0   w-full lg:w-1/4 bg-[#191919] rounded-xl lg:ml-8 mb-8 lg:mb-0">
                            <div class="text-center p-5 pt-9">
                                <i class="fa fa-user text-4xl text-[#fcba03]" aria-hidden="true"></i>
                            </div>
                            <div class="text-center">
                                <h3 class="text-white text-2xl">Web Development</h3>
                            </div>

                            <div class="p-2 pt-8 text-center">
                                <p class=" text-sm text-neutral-600 ">i am a front-end web Developer. I can provide clean
                                    code and pixel perfect design.I also make the website more & more interactive with web
                                    animaction.I can provide clean code and pixel perfect design.</p>
                            </div>

                            <div class="w-full flex justify-center py-5">
                                {/* <button
                            class="   hover:bg-[#fcba03] hover:text-white text-[#fcba03] border border-[#fcba03] rounded-full  py-2 px-4">

                            Read More
                        </button> */}
                                <button class="custom-btn btn-12 "><span>Click!</span><span>Read More</span></button>
                            </div>
                        </div>


                        <div class="border-4 border-transparent hover:border-[#fcba03] w-full px-3 lg:px-0 lg:w-1/4 bg-[#191919] rounded-xl lg:ml-6 mb-8 lg:mb-0">
                            <div class="text-center p-5 pt-9">
                                <i class="fa fa-bell text-4xl text-[#fcba03]" aria-hidden="true"></i>
                            </div>
                            <div class="text-center">
                                <h3 class="text-white text-2xl">Web Development</h3>
                            </div>

                            <div class="p-2 pt-8 text-center ">
                                <p class=" text-sm text-neutral-600 ">i am a front-end web Developer. I can provide clean
                                    code and pixel perfect design.I also make the website more & more interactive with web
                                    animaction.I can provide clean code and pixel perfect design.</p>
                            </div>


                            <div class="w-full flex justify-center py-5">
                                {/* <button
                            class="   hover:bg-[#fcba03] hover:text-white text-[#fcba03] border border-[#fcba03] rounded-full  py-2 px-4">

                            Read More
                        </button> */}

                                <button class="custom-btn btn-12 "><span>Click!</span><span>Read More</span></button>

                            </div>
                        </div>












                    </div>
                </div>
            </section>
        </>
    )
}

export default Service