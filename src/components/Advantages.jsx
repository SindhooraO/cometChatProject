import React from 'react';
import {
  FaExpandArrowsAlt,
  FaCoins,
  FaChalkboardTeacher,
  FaCodeBranch,
  FaClock,
  FaChartBar,
  FaBook,
  FaQuestionCircle,
  FaUsers,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaExpandArrowsAlt />,
    title: 'Free credits',
    desc: 'Empowering partners to scale.',
  },
  {
    icon: <FaCoins />,
    title: 'Revenue share',
    desc: 'Get monthly recurring revenues when you refer clients.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Training and mentoring sessions',
    desc: 'Enabling partners to deliver the best experience.',
  },
  {
    icon: <FaCodeBranch />,
    title: 'Special developer access',
    desc: 'Get an all-access account to build unlimited PoCs for your clients.',
  },
  {
    icon: <FaClock />,
    title: 'Reduced time',
    desc: 'Deliver your products much faster with our partners’ programs.',
  },
  {
    icon: <FaChartBar />,
    title: 'Value addition to your users',
    desc: 'We need a 2 line text here',
  },
  {
    icon: <FaBook />,
    title: 'Knowledge sessions',
    desc: 'Access to product and market sessions.',
  },
  {
    icon: <FaQuestionCircle />,
    title: 'On-demand support',
    desc: 'Technical assistance for implementation.',
  },
  {
    icon: <FaUsers />,
    title: 'Significant passive income',
    desc: 'We need a 2 line text here',
  },
];

export default function Advantages() {
  return (
    <section className="bg-[#0A0914] text-white py-12 px-6">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

      {/* <div className="max-w-[1440px] mx-auto px-10"> */}
        {/* Section Title */}
       {/* Desktop Only Text */}
<div className="hidden md:block">
  <p className="text-orange-500 text-lg font-medium mb-2">Be a partner</p>
  <h2 className="text-4xl font-semibold mb-10 leading-tight">
    CometChat partner <br />advantages
  </h2>
  <hr className="border-white/10 mb-12" />
</div>

{/* Mobile Only Text */}
<div className="block md:hidden">
  <p className="text-orange-500 text-lg font-medium mb-2">The benefits</p>
  <h2 className="text-2xl font-semibold mb-10 leading-tight">
    Moderation to help your community thrive
  </h2>
</div>

       {/* Grid Benefits */}
<div className="grid md:grid-cols-3 gap-10">
  {benefits.map((item, index) => (
    <div key={index} className="flex flex-col items-start gap-3">
      <div className="bg-orange-700/20 p-2 rounded-full text-orange-500 text-xl">
        {item.icon}
      </div>
      <h3 className="font-semibold text-base">{item.title}</h3>
      <p className="text-gray-400 text-sm">{item.desc}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
