import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
      <footer className="bg-[#0A0914] text-white pt-0 pb-16  overflow-hidden">
        {/* Top Section with Background and Buttons */}
        <div className="relative z-10">
          {/* SVG Backgrounds - Only for the top */}
          <div className="relative overflow-hidden pt-24 pb-32 text-left md:text-center">
            
            <img
              src="https://www.cometchat.com/_app/immutable/assets/background-1.55dbb278.svg"
              alt=""
              className="absolute top:30 left:0 md:top-0 md:left-0 md:w-full md:h-full object-cover pointer-events-none opacity-80"
            />
            <img
              src="   https://www.cometchat.com/_app/immutable/assets/ellipse.38e65891.svg
"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-80"
            /> 
            <img
  src="https://www.cometchat.com/_app/immutable/assets/background-2.8c86b37e.svg"
  alt="background"
  className="absolute w-80 h-50 -top-20 -left-20 md:-top-62 md:-left-42 md:w-196 md:h-196 object-contain z-0"
/>
            
            <div className="relative z-10 px-6">
              <h1 className="text-5xl font-semibold mb-4 leading-snug">
                Get started for free
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Build and test for as long as you need. <br />
                Pick a plan when you're ready.
              </p>
              <button className="text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-gray-700 mx-2">
                Start free trial
              </button>
            <button className="text-white text-xs px-4 py-2.5 rounded-md hover:opacity-90"
  style={{
    background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 100%)'
  }}>                  Schedule a demo
              </button>
            </div>
          </div>
        </div>
  
        {/* Bottom Section with Plain Dark Background */}
        <div className="text-white px-2 md:px-10 text-3xl px-6 ">
            comet<span className="text-white-400 font-bold">chat</span>
          </div>

<div className=" hover:cursor-pointer hidden md:grid relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-xs font-semibold mt-10 px-10 mb-16 ">
          {/* Platform */}
          <div>
            <h4 className=" font-semibold mb-3" style={{ color: '#6852D6' }}>Platform</h4>
            <ul className=" space-y-4 text-gray-300  ">
            <li className="text-gray-500 ">Features</li>
              <li>Chat & Messaging</li>
              <li>Voice & Video Calls</li>
              <li>Security & Compliance</li>
              <li>Extensions</li>
              <li>Features at a glance</li>
              <li>Webhooks & Bots</li>
              <li>Moderation</li>
              <li>Analytics & Insights</li>
              <li className="text-gray-500 ">Implementation</li>
              <li>Widgets</li>
              <li>UI Kits</li>
              <li>SDKs & APIs</li>
              <li className="text-gray-500  ">Technologies</li>
              <li>React Chat SDK & API
              </li>
              <li>Angular Chat SDK & API
              </li>
              <li>Vue Chat SDK & API
              </li>
              <li>IOS Swift Chat SDK & API</li>
              <li>Android Kotlin Chat SDK & API</li>
              <li>
              Android Java Chat SDK & API</li>
              <li>React Native Chat SDK & API</li>
              <li>Ionic/Capacitor Chat SDK & API</li>
              <li>WordPress Chat SDK & API</li>
              <li>Lavarel/PHP Chat SDK & API</li>
              <li>Flutter Chat SDK & API
              </li>
              <li>Next.js Chat SDK & API</li>

            </ul>
          </div>
  
          {/* Solutions */}
          <div>
            <h4 className=" font-semibold mb-3"style={{ color: '#6852D6' }}>Solutions</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="text-gray-500">By Use cases</li>
              <li >Social Community</li>
              <li>Marketplace</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Virtual Events</li>
              <li>On-Demand Service</li>
              <li>Dating Apps</li>
              <li>Gaming</li>
              <li className="text-gray-500 ">By Organization Type</li>
              <li>Enterprise</li>
              <li>Startups</li>
            </ul>
          </div>
  
          {/* Developers */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-3"style={{ color: '#6852D6' }}>Developers</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="text-gray-500">Technologies documentation</li>
              <li>React</li>
              <li>Angular</li>
              <li>Vue</li>
              <li>iOS Swift</li>
              <li>Android Kotlin</li>
              <li>Android Java</li>
              <li>React Native</li>
              <li>Ionic/Capacitor</li>
              <li>WordPress</li>
              <li>Laravel/PHP</li>
              <li>Flutter</li>
              <li>Next.js</li>
              <li className="text-gray-500 mt-2">Documentation</li>
              <li>Documentation</li>
              <li>Product updates
              </li>
              <li>Tutorials</li>
              <li>
              Open-source Apps</li>
              <li>Product status</li>
              <li>Glossary</li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-3"style={{ color: '#6852D6' }}>Resources</h4>
            <ul className=" space-y-4 text-gray-300">
              <li>Customer stories</li>
              <li>Blog</li>
              <li>Give feedback</li>
              <li>Community forum</li>
              <li>Help center</li>
              <li>Partners</li>
            </ul>
{/* Competitors */}
<div>
           
            <h4 className="text-purple-400 font-semibold mb-4 mt-2"style={{ color: '#6852D6' }}>Competitors</h4>
            <ul className="space-y-4 text-gray-300">
              <li>SendBird</li>
              <li>GetStream</li>
              <li>Applozic</li>
              <li>Twilio</li>
              <li>PubNub</li>
            </ul>           </div>
 {/* Company */}
 <div>
          
            <h4 className="text-purple-400 font-semibold mb-4 mt-2"style={{ color: '#6852D6' }}>Company</h4>
            <ul className="space-y-4 text-gray-300">
              <li>About us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Pricing</li>
              <li>Chat with us</li>
            </ul>
          </div>
  
          
  

          </div>
        </div>
<div className="md:hidden px-2 pt-8 text-white px-6">
  {/* <h1 className="text-2xl font-semibold mb-6">comet<span className="font-light">chat</span></h1> */}

  {["Platform", "Solutions", "Developers", "Resources", "Competitors", "Company"].map((item, idx) => (
    <div key={idx} className="border-b border-gray-700 py-4 flex justify-between items-center ">
      <span className=" font-medium " style={{ color: '#6852D6' }}>{item}</span>
      <span className=" text-xl" style={{ color: '#6852D6' }}>+</span>
    </div>
  ))}



  {/* Social Icons */}
  <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400 font-semibold">
    <span className="flex items-center hover:text-[#FAFAFF] gap-2"><FaFacebook /> Facebook</span>
    <span className="flex items-center hover:text-[#FAFAFF] gap-2"><FaLinkedin /> LinkedIn</span>
    <span className="flex items-center hover:text-[#FAFAFF] gap-2"><FaInstagram /> Instagram</span>
    <span className="flex items-center hover:text-[#FAFAFF] gap-2"><FaTwitter /> Twitter</span>
    <span className="flex items-center hover:text-[#FAFAFF] gap-2"><FaGithub /> GitHub</span>
  </div>

  {/* Legal */}
  <div className="mt-6 text-sm text-gray-500  flex flex-wrap items-center gap-4 font-semibold">
  <span>2023 © CometChat</span>
  <span className="hover:underline cursor-pointer hover:text-[#6852D6]">Terms of Use</span>
  <span className="hover:underline cursor-pointer hover:text-[#6852D6]">Privacy Policy</span>
</div>
</div>


  
        {/* Footer Bottom */}
        <div className="hidden md:flex relative z-10 mt-16 text-white font-bold-700 text-xs px-10">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-6 w-full">

    {/* Left Side */}
    <div className="flex flex-wrap items-center gap-4">
      <span>2023 © CometChat</span>
      <span className="cursor-pointer hover:underline hover:text-[#6852D6]">Terms of Use</span>
      <span className="cursor-pointer hover:underline hover:text-[#6852D6]">Privacy Policy</span>
    </div>

    {/* Right Side with Icons */}
    <div className="flex flex-wrap items-center gap-4 text-sm">
      <span className="flex items-center gap-2 hover:text-[#FAFAFF] cursor-pointer hover:underline"><FaFacebook /> Facebook</span>
      <span className="flex items-center gap-2 hover:text-[#FAFAFF] cursor-pointer hover:underline"><FaLinkedin /> LinkedIn</span>
      <span className="flex items-center gap-2 hover:text-[#FAFAFF] cursor-pointer hover:underline"><FaInstagram /> Instagram</span>
      <span className="flex items-center gap-2 hover:text-[#FAFAFF] cursor-pointer hover:underline"><FaTwitter /> Twitter</span>
      <span className="flex items-center gap-2 hover:text-[#FAFAFF] cursor-pointer hover:underline"><FaGithub /> GitHub</span>
    </div>
  </div>
</div>

      </footer>
    );
  }
  