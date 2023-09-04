/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../images/logo_one.png'
import twitter from "../icons/icons_Twitter.svg";
import linkedIn from "../icons/icon_linkedin.svg";
import facebook from "../icons/icon_facebook.svg";
import phone from "../icons/icon_phone.svg";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-16 w-52 mr-2" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4">
          <div className="md:mr-8">
            <h4 className="text-gray-800 uppercase font-semibold">Contact Me</h4>
            {/* <p className="text-gray-600 mt-2">
              Address: 123 Street, Freetown, Sierra Leone
            </p> */}
            <p className="text-gray-600 mt-1">Phone: +1 00 000 000</p>
            <p className="text-gray-600 mt-1">Email: info@imo-tech.com</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h4 className="text-gray-800 uppercase font-semibold">Social Media</h4>
            <div className="flex mt-2">

            <a
                  rel="GitHub noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-8 h-8" src={twitter} alt="image" />
                </a>

                <a
                  rel="facebook noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-8 h-8 " src={facebook} alt="image" />
                </a>

                <a
                  rel="phone"
                  href="tel: +23279000000"
                  className="px-1 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-8 h-8 " src={phone} alt="image" />
                </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} IMO-Technology. All rights reserved.
          ~ Design By <span className='hover:text-gray-800'> <a href='#'
          target="_blank" rel="noopener noreferrer"> IMO Technology </a></span>
        </div>
      </div>
    </footer>
  );
}





export default Footer;
