import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hero_background from '../images/hero_background.png'
import mobile from '../images/mobile_qrl.png'
import FeaturesCard from "../components/features";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionId = searchParams.get("section");

    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
    AOS.refresh();
  }, []);




  const plans = [
    {
      title: 'Free',
      description: 'Access to basic features',
      price: 'Free',
      features: [
        'Limited usage per month',
        'Basic customer support',
        'Ads-supported',
        'Standard designs',
        'No priority access',
      ],
      buttonColor: 'bg-gray-600',
    },
    {
      title: 'Premium Version',
      description: 'Access to all features',
      price: '$9.99/month',
      features: [
        'Unlimited usage',
        'Priority customer support',
        'Ad-free experience',
        'Premium designs',
        'Monthly data export',
      ],
      buttonColor: 'bg-red-600', // Set the button background color to red
    },
    {
      title: 'QRcard Premium',
      description: 'Access to advanced features',
      price: '$19.99/month',
      features: [
        'Unlimited usage',
        'Priority customer support',
        'Ad-free experience',
        'Premium designs',
        'Unlimited data export',
      ],
      buttonColor: 'bg-green-600', // Set the button background color to green
    },
  ];


  return (
    <>
      <section
        className="
        text-gray-800 w-full flex
        items-center justify-center"
        style={{ backgroundImage: `url(${hero_background})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
      }}
        id="home"
      >
        <div
          className="
          container flex flex-col justify-center p-6
          sm:py-16 lg:py-24 lg:px-14 lg:flex-row
          lg:justify-between pb-12 pt-20
          xl:ml-5  "
        >
          <div
            className="
            flex flex-col justify-center
            text-center rounded-sm
            lg:max-w-2xl xl:max-w-3xl lg:text-left"
          >
            <h1 className="text-4xl font-bold leading-none sm:text-5xl text-purple-header">
              Scan, create and share <br />
              <span className="text-purple"> business cards </span>
              with only one app.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
              DigiCard is an eco-friendly business card application which can be
              used on phones and tablets. It can scan your printed business
              cards and save personal information automatically. Therefore, you
              can get rid of keeping your cards and recycle them. Without
              printing, you can share digital cards which you design on your
              phone or tablet. You can make calls, send messages or e-mails and
              take directions to addresses using cards you saved.{" "}
              <span className="text-blue-500"></span>
            </p>
            <div
              className="flex flex-col space-y-4 sm:items-center sm:justify-center
                          sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            >
              <a
                rel="get in touch"
                href="mailto:amarafatue@gmail.com"
                className="px-8 py-3 text-lg font-semibold rounded
                dark:bg-purple dark:text-white
                transform hover:scale-110 transition-transform duration-300"
              >
                Order Sticker Now
              </a>
            </div>
          </div>
          <div
            className="
            flex items-center justify-center p-6 mt-8
            lg:mt-0 h-3/4 sm:h-80 lg:h-96
            xl:h-112 2xl:h-128"
          >
            <img
              src={mobile}
              alt="Service"
              className="object-contain object-center h-full w-full rounded-t-3xl"
            />
          </div>
        </div>
      </section>

      <section className=" my-16"
      >
        <h2
          className="text-2xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6"
          data-aos="fade-right"
        >
          Features
        </h2>
        < FeaturesCard />
      </section>

      <section
      className="text-white w-full h-screen flex items-center justify-center bg-gray-200"
      // style={{
      //   backgroundImage: `url(${hero_background})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      // }}
      id="home"
    >
      <div className="bg-black bg-opacity-70 p-12 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold mb-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-xl">
          <li className="mb-4">⭐ React provides efficient and performant UI rendering.</li>
          <li className="mb-4">⚡ Tailwind CSS offers a highly customizable design system.</li>
          <li className="mb-4">🔧 React's component-based approach enhances code organization.</li>
          <li className="mb-4">🎨 Tailwind CSS lets you create beautiful designs without writing custom CSS.</li>
          <li className="mb-4">🌐 React allows building dynamic and interactive web applications.</li>
          <li className="mb-4">📱 Tailwind CSS is responsive by default, perfect for mobile-friendly sites.</li>
        </ul>
        <p className="text-sm">Let's combine the power of React and the flexibility of Tailwind CSS to create stunning user experiences!</p>
        <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg focus:outline-none">Get Started</button>
      </div>
    </section>




    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Choose Your Plan</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">{plan.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{plan.description}</p>
              <p className="text-3xl font-semibold mb-6 text-center">{plan.price}</p>
              <ul className="text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-3">
                    <svg
                      className="w-4 h-4 mr-2 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm6.293 2.293a1 1 0 011.414 0L12 13.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full text-white rounded-md py-3 px-6 font-semibold hover:opacity-90 focus:outline-none ${plan.buttonColor}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
