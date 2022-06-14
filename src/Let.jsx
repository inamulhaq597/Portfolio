import React from 'react'

const Let = () => {
    const inputStyle = [
        "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm border-gray-300 rounded-lg p-4 text-black md:text-md lg:text-lg  font-semibold ",
      ];
  return (
   <>
           <section class="w-full bg-[#191919]   ">
        <div class="flex items-center  h-full">
            <div class="container mx-auto ">
               <h1 className='text-white text-center mt-10 lg:text-7xl  text-6xl font-bold'>Contact Me</h1>

                <div>
                <form
          className="max-w-screen-md mx-auto p-10 "
        >
          <div className="flex w-full flex-col  md:flex-row justify-around items-center space-y-3 md:space-y-0 md:space-x-2  text-white">
            <div className="w-full col-span-6 sm:col-span-3 flex-1">
              <label htmlFor="first-name" className="block text-lg font-bold ">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                className={`${inputStyle} `}
              />
             
            </div>

            <div className="w-full col-span-6 sm:col-span-3 flex-1 ">
              <label htmlFor="last-name" className="block text-lg font-bold ">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                autoComplete="family-name"
                className={`${inputStyle}`}
              />
              
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 text-white mt-4">
            <label htmlFor="email-address" className="block text-lg font-bold ">
              Email address
            </label>
            <input
              type="email"
              id="email-address"
              autoComplete="email"
              className={`${inputStyle}`}
            />
           
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-lg font-bold text-white"
            >
              Messaege
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                type="text"
                rows={3}
                className={`${inputStyle}`}
                defaultValue={""}
              />
            
            </div>
          </div>
          <div className="flex justify-center  md:justify-end mt-5 ">
            <button
              id="submitId"
              type="submit"
              className="btn_trans px-4  py-2 m-3 text-white   font-bold bg-transparent  rounded-full  border shadow-xl cursor-pointer active:scale-95  hover:bg-[#fcba03] hover:text-white text-[#fcba03] border border-[#fcba03]"
            >
              Send Now
              
            </button>
          </div>
        </form>
       
      </div>
                {/* <div class="w-full flex justify-center py-5">
                    <button
                        class="   hover:bg-[#fcba03] hover:text-white text-[#fcba03] border border-[#fcba03] rounded-full  py-2 px-4">

                        Hire Me
                    </button>
                </div> */}
            </div>

        </div>
    </section>
   </>
  )
}

export default Let