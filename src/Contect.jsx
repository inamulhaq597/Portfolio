import React from 'react'
import Mail from './img/Mail.png'
import Contact from './img/Contact.png'
import Location from './img/Location.png'

const Contect = () => {
    const datas = [
        {
            heading: "Address",
            subheading: "Kaleem Shahed Caloney No#1 City Faisalabad",
            icon: Location,
        },
        {
            heading: "Email",
            subheading: "NomiRiaz597@gmail.com",
            icon: Mail,
        },
        {
            heading: "Phone",
            subheading: "+92 332 865 3814",
            icon: Contact,
        },
     
    ];
    return (
        <>
        <div className='flex justify-center items-center  text-center'id='contect'>

   

            <div className="max-w-screen-xl mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 place-content-center place-items-center text-white  ">
                {datas.map((data, id) => {
                    return (
                        <div
                            className=" w-5/6 h-[250px] flex flex-col justify-center items-center space-y-5  text-center  p-10  border-4 border-transparent hover:border-[#fcba03]    contact-icons rounded-3xl"
                            key={id}
                        >
                            <span className=" transition-all delay-50 ease-in-out cursor-pointer w-[80px]">
                                <img
                                    loading="eager"
                                    height="100"
                                    width="100"
                                    periority
                                    layout="intrinsic"
                                    src={data.icon}
                                    alt="icons"
                                />
                            </span>
                            <h4 className="text-xl font-bold">{data.heading}</h4>
                            <p>{data.subheading}</p>
                        </div>
                    );
                })}
            </div>



            </div>


































            {/* <section class="w-full  h-72 " id="Contact">
                <div class="container mx-auto  h-full   flex  items-center justify-center flex-col">

                    <div class="pt-12 ">
                        <h2 class="text-white text-3xl ">INAM UL HAQ</h2>
                    </div>
                    <div class="pt-6 ">
                        <a href='https://www.facebook.com/nomiriaz814'>
                            <i class="fa fa-facebook-square pr-3 text-3xl text-[#fcba03]" aria-hidden="true"></i>
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=+923328653814&text=Hello this is the starting message'>

                        <i class="fa fa-whatsapp text-3xl  pr-3  text-[#fcba03]" aria-hidden="true"></i>
                        </a>
                        <a href='https://www.instagram.com/nomiriaz/'>
                        <i class="fa fa-instagram text-3xl pr-3  text-[#fcba03]" aria-hidden="true"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/inam-ul-haq-8017b022a/'>
                            <i class="fa fa-linkedin-square text-3xl text-[#fcba03]" aria-hidden="true"></i>

                        </a>
                    </div>
                </div>

            </section> */}
        </>
    )
}

export default Contect