import React from 'react';
import { FaCheckCircle, FaCode, FaSun } from 'react-icons/fa';

const programs = [
  {
    icon: <FaCheckCircle />,
    title: 'Affiliate partner program',
    desc: 'Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.',
  },
  {
    icon: <FaCode />,
    title: 'Technology partner program',
    desc: 'Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!',
  },
  {
    icon: <FaSun />,
    title: 'Start up growth program',
    desc: 'We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.',
  },
];

export default function Programs() {
  return (
    <section className="bg-[#f7f6fb] text-black py-20 px-6">
      {/* <div className="max-w-[1440px] mx-auto px-10"> */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

        {/* Section Heading */}
        <p className="text-violet-600 text-lg font-semibold mb-2">Our programs</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12"> Types of partnerships <br />programs</h2>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {programs.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-4 ">
              {/* Icon with circle background */}
              <div className="bg-violet-100 text-violet-600 p-3 rounded-full text-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm-200 font-semibold" >{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
