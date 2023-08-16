/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../images/logo_one.png'

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-16 w-72 mr-2" />
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-3"
              >
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-3"
              >
                Twitter
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                Instagram
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
