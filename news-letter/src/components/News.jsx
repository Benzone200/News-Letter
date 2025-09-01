import React from 'react'
import potato from "../assets/images/potato.png"

const News = () => {
  return (
    <div className="flex  flex-col lg:flex-row items-center justify-between gap-8 text-white px-4">
      {/* Left Side */}
      <div className="w-full">
        <div className="text-left ml-2">
          <h2 className="text-[24px] sm:text-[30px] font-semibold">Subscribe Now</h2>
          <h2 className="text-[24px] sm:text-[30px] font-semibold text-blue-400">to Our Newsletter</h2>
        </div>
        <p className="text-gray-300 mt-3 w-full max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing el.
          Sed non risus. Suspendisse lectus tortor, dignissim sit
          amet, adipiscing nec, ultricies sed, dolor. Cras ultricies
        </p>

        {/* Form */}
        <form className="mt-6 flex flex-col gap-3 items-start">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-full text-black bg-white w-full max-w-[200px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-full text-black bg-white w-full max-w-[200px]"
          />
          <button className="bg-blue-500 px-4 py-2 rounded-full w-24">
            Send
          </button>
        </form>
      </div>

      {/* Right Side: Potato Image */}
     <div className="flex flex-col lg:flex-row  items-center justify-between gap-8 text-white px-4">
        {/* Outer white ring */}
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-white flex justify-center items-center  ">
          {/* Middle blue ring */}
          <div className="w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 border-4 border-blue-500 flex justify-center items-center">
            {/* Inner blue gradient background */}
            <div className="w-[190px] h-[190px] lg:w-[300px] lg:h-[300px] rounded-full border-black border-2 bg-gradient-to-r from-blue-500 to-blue-400 flex justify-center items-center">
              {/* Potato image */}
              <img src={potato} alt="Potato" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News