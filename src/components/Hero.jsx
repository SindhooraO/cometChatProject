import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaMoon } from 'react-icons/fa';

export default function Hero() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <section className={`relative min-h-screen overflow-hidden ${isDark ? 'bg-[#0A0914] text-white' : 'bg-white text-black'}`}>
      {/* Background SVGs */}
      <img
  src="https://www.cometchat.com/_app/immutable/assets/background-2.8c86b37e.svg"
  alt="background"
  className="absolute top-6 left-4 w-50 h-40 object-contain z-0 md:top-10 md:left-10 md:w-72 md:h-72"
/>
{/* Background for Mobile */}
<img
  src="https://www.cometchat.com/_app/immutable/assets/background-1.55dbb278.svg"
  alt="background mobile"
  className="absolute bottom-80 left-10 w-50 h-40 object-contain z-0 pointer-events-none md:hidden"
/>


{/* Background for Desktop */}
<img
  src="https://www.cometchat.com/_app/immutable/assets/background-1.55dbb278.svg"
  alt="background desktop"
  className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
/>
<img
              src="   https://www.cometchat.com/_app/immutable/assets/ellipse.38e65891.svg"
              alt=""
              className="absolute top-0 right-0 w-full h-full object-cover pointer-events-none opacity-80"
            /> 





<div className="relative z-10 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
  {/* Navbar */} 

  <nav className="flex justify-between items-center h-[60px] ">
          <div className="text-white  text-2xl ">
            comet<span className="text-white-400 font-bold">chat</span>
          </div>


    {/* Mobile View: Log in + Moon */}
    <div className="md:hidden flex items-center space-x-4">
      <button className="text-sm hover:underline">Log in</button>
      <button onClick={toggleTheme} className='border border-gray-500 rounded p-1 '>
        <FaMoon className="text-gray-300" />
      </button>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex space-x-10 text-sm text-gray-300 dark:text-gray-700">
      <a href="#" className="hover:underline">Platform</a>
      <a href="#" className="hover:underline">Solutions</a>
      <a href="#" className="hover:underline">Developers</a>
      <a href="#" className="hover:underline">Resources</a>
      <a href="#" className="hover:underline">Pricing</a>
    </div>

    {/* Desktop Buttons */}
    <div className="hidden md:flex items-center space-x-3 text-sm">
      <button className="text-sm hover:underline">Log in</button>
      <button
        className="px-4 py-2 rounded-md text-xs text-white hover:opacity-90"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 100%)' }}
      >
        Schedule a demo
      </button>
    </div>
  </nav>


        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center px-8  gap-0 mt-10">
          {/* Left text */}
          <div className="w-full md:w-1/2  md:text-left md:ml-12 lg:ml-20" >
            <h1 className="text-2xl  sm:text-4xl md:text-4xl font-semibold leading-snug mb-4 ">
              Join the CometChat<br />partner universe
            </h1>
            <p className="text-base  sm:my-2 sm:text-lg max-w-md mx-auto md:mx-0 text-gray-300 dark:text-gray-700">
              Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
            </p>
          </div>

          {/* Right form */}
          <div className="bg-white mt-4 bg-opacity-5 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-md w-full md:w-[480px] ">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 text-left">Became a partner</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col text-left">
                <label className="text-sm  text-gray-400 mb-1">Full Name</label>
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-2 py-2.5">
                  <FaUser className="text-gray-400 mr-2 text-sm" />
                  <input
                    type="text"
                    placeholder="Type your name here..."
                    className="bg-transparent outline-none w-full placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left">
                <label className="text-sm text-gray-400 mb-1">Email address</label>
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-2 py-2">
                  <FaEnvelope className="text-gray-400 mr-2 text-sm" />
                  <input
                    type="email"
                    placeholder="Type your email..."
                    className="bg-transparent outline-none w-full placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left">
                <label className="text-sm text-gray-400 mb-1">Company's name</label>
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-2 py-2">
                  <FaBuilding className="text-gray-400 mr-2 text-sm" />
                  <input
                    type="text"
                    placeholder="Your company's name..."
                    className="bg-transparent outline-none w-full placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              <button
                className="mt-2 self-start text-white text-xs px-4 py-2 rounded-md hover:opacity-90"
                style={{ background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 100%)' }}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 my-12" />

      {/* Logos Section */}
<div className="flex overflow-x-auto no-scrollbar md:overflow-visible justify-start md:justify-center items-center gap-6 sm:gap-10 md:gap-12 opacity-80 mb-10 px-4">
  {[
    {
      src: "https://experientialexecutive.com/wp-content/uploads/2023/02/AWS-Logo-Gray.png",
      alt: "AWS",
    },
    {
      src: "https://www.sibis.com.ua/wp-content/uploads/2017/06/Microsoft-logo.png",
      alt: "Microsoft",
    },
    {
      src: "https://media.biocompare.com/m/37/futurelab/NGS/10xgenomics-logo-fff.png",
      alt: "10X Genomics",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nasscom-logo-svg.svg/1280px-Nasscom-logo-svg.svg.png",
      alt: "NASSCOM",
    },
    {
      src: "https://www.tychon.app/assets/images/techstars_logo_grey.png",
      alt: "Techstars",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      alt: "Cisco",
    },
  ].map((logo, index) => (
    <div
      key={index}
      className="min-w-[120px] md:min-w-0 h-12 w-36 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all duration-200"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))}
</div>



      </div>
    </section>
  );
}