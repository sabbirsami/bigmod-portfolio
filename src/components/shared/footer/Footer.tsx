import React from "react";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary_dark text-gray-200 pt-24 pb-16 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Office Section */}
        <div>
          <Logo width={165} className="h-16" />
          <h2 className="text-xl font-semibold mt-4">Office</h2>
          <div className="w-10 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two mb-5"></div>
          <p className="text-sm">
            Holding # 457, DIT Road, 3rd Floor, West Rampura, Dhaka-1219.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaPinterest /></a> */}
          </div>
        </div>

        {/* Our Services Section */}
        <div>
          <h2 className="text-xl font-semibold ">Our Services</h2>
          <div className="w-16 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two mb-5"></div>
          <ul className="space-y-2 text-sm">
            <li>Strategy & Research</li>
            <li>Web Development</li>
            <li>Web Solution</li>
            <li>Digital Marketing</li>
            <li>App Design</li>
            <li>App Development</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-semibold ">Company</h2>
          <div className="w-16 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two mb-5"></div>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Pricing Plan</li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h2 className="text-xl font-semibold">Contacts</h2>
          <div className="w-16 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two mb-5"></div>
          <ul className="space-y-2">
            <li className="flex items-center         text-sm ">
              {/* <FaPhoneAlt className="mr-2" />  */}
              +880 255 128 071
            </li>
            <li className="flex items-center       text-sm">
              {/* <FaPhoneAlt className="mr-2" />  */}
              +880 151 562 0108
            </li>
            <li className="flex items-center text-sm">
              {/* <FaEnvelope className="mr-2" />  */}
              info@bigmodtech.com
            </li>
            <li className="flex items-center text-sm">
              {/* <FaMapMarkerAlt className="mr-2" />  */}
              Holding # 457, DIT Road, 3rd Floor, West Rampura, Dhaka-1219.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto border-t border-gray-700 mt-14 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2024 Bigmod Technologies</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Support Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
