/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import qrl_scanner from "../images/qel_scanner.png";
import arrowIcon from "../images/icons_arrow.svg";
import mobile from "../images/mobile_qrl.svg";
import FeaturesCard from "../components/features";
import ContactUs from "../components/ContactUs";

import Accordion from "../components/Accordion";

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

  const [openSection, setOpenSection] = useState("What is a QRL code?");

  const plans = [
    {
      title: "Free",
      description: "Access to basic features",
      price: "Free",
      features: [
        "Limited usage per month",
        "Basic customer support",
        "Ads-supported",
        "Standard designs",
        "No priority access",
      ],
      buttonColor: "bg-gray-600",
    },
    {
      title: "Premium Version",
      description: "Access to all features",
      price: "Nle50.99/month",
      features: [
        "Unlimited usage",
        "Priority customer support",
        "Ad-free experience",
        "Premium designs",
        "Monthly data export",
      ],
      buttonColor: "bg-red-600", // Set the button background color to red
    },
    {
      title: "QRcard Premium",
      description: "Access to advanced features",
      price: "Nle80.99/month",
      features: [
        "Unlimited usage",
        "Priority customer support",
        "Ad-free experience",
        "Premium designs",
        "Unlimited data export",
      ],
      buttonColor: "bg-green-600", // Set the button background color to green
    },
  ];

  const navToPricing = "/?section=pricing";

  return (
    <>
      <section
        className="
        text-gray-800 w-full flex bg-hero-bg
        items-center justify-center"
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
            lg:max-w-xl xl:max-w-2xl lg:text-left"
          >
            <h1 className="text-4xl font-bold leading-none sm:text-5xl text-purple-header">
              Scan, create and share <br />
              <span className="text-purple"> business cards </span>
              with only one app.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body text-justify">
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
              className="flex flex-row space-y-4 sm:items-center sm:justify-center
                          items-center justify-center
                          sm:space-y-0 sm:space-x-4 lg:justify-start"
            >
              <img src={arrowIcon} alt="arrow" className="w-20" />
              <Link
                rel="get in touch"
                to={navToPricing}
                className="px-8 py-3 text-lg font-semibold rounded
                bg-purple text-white transform hover:scale-75
                transition-transform duration-700"
              >
                Order Sticker Now
              </Link>
            </div>
          </div>
          <div
            className="
            flex items-center justify-center p-6 mt-8
            lg:max-w-3xl xl:max-w-3xl
            lg:w-2/4
            "
          >
            <img
              src={mobile}
              alt="Service"
              className="object-contain object-center h-full w-full"
            />
          </div>
        </div>
      </section>

      <section className="my-20 sm:my-16">
        <h2
          className="text-4xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6"
          id="features"
          data-aos="fade-right"
        >
          Features
        </h2>
        <FeaturesCard />
      </section>

      <section
        className="text-white w-full sm:h-screen flex items-center justify-center bg-purple-light"
        id="home"
      >
        <div className="bg-purple bg-opacity-70 p-12 rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-xl">
            <li className="mb-4">
              ⭐ React provides efficient and performant UI rendering.
            </li>
            <li className="mb-4">
              ⚡ Tailwind CSS offers a highly customizable design system.
            </li>
            <li className="mb-4">
              🔧 React's component-based approach enhances code organization.
            </li>
            <li className="mb-4">
              🎨 Tailwind CSS lets you create beautiful designs without writing
              custom CSS.
            </li>
            <li className="mb-4">
              🌐 React allows building dynamic and interactive web applications.
            </li>
            <li className="mb-4">
              📱 Tailwind CSS is responsive by default, perfect for
              mobile-friendly sites.
            </li>
          </ul>
          <p className="text-sm">
            Let's combine the power of React and the flexibility of Tailwind CSS
            to create stunning user experiences!
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      <section class="bg-gray-100 border-b py-8" id="everything">
        <div class="container max-w-5xl mx-auto m-8">
          <div className="text-center py-2 flex flex-col items-center justify-center">
            <p
              className="text-4xl font-bold leading-none sm:text-3xl
          text-purple-header mt-6"
            >
              Everything you need to know to get started
            </p>
            <div className="w-16 h-1 bg-purple mt-2" data-aos="fade-right">
              {" "}
            </div>
            <p
              className="
              text-2x1 leading-none sm:text-2xl
              text-purple-header my-6
              "
            >
              In this section you will find the basic concepts and the necessary{" "}
              <br />
              steps to start enjoying the benefits of using QR.
            </p>
          </div>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row justify-center items-center"
            data-aos="fade-up"
          >
            <div class="w-full sm:w-1/2 p-6">
              <div className="p-4">
                <Accordion
                  title="What is a QRL code?"
                  content="
                    The term “QR” stands for “quick response” and refers to instant access to the information contained in
                    the Code. It is, in short, the evolution of the barcode, made up of patterns of black and white pixels.
                    Denso Wave, a Japanese subsidiary of Toyota Denso, developed them in order to mark the components of
                    their cars and thus speed up logistics in their production. Currently, it has gained great popularity,
                    due to its versatility and accessibility, thanks to the functions of smart phones.
                  "
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                />
                <Accordion
                  title="Know the benefits of using QR"
                  content="
                    You will have noticed that more and more companies choose to include QR, as a fundamental resource
                    for the marketing and commercialization of their products and services. Its growing popularity is
                    due to the multiplicity of uses that you can give it: to receive payments from your clients, share
                    links to web pages, catalogs and price lists, receive comments on your products or services, invite
                    the client to share images or videos , promote your business events and much more, with just a scan!
                  "
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                />
                <Accordion
                  title="How to start using QR"
                  content="
                    Many devices already have a built-in QR code reader. In this case, all you have to do is open the
                    camera on your mobile phone and hold it over a code for a few seconds, until a notification appears
                    on the screen. In case this does not happen, go to settings to check that QR scanning is enabled.
                    If you don't have the feature, just download and install a QR code reader from your app store.
                  "
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                />
              </div>
            </div>
            <div class="w-full sm:w-2/5 w-1/2 p-6 sm:order-first ">
              <img class="w-full" src={qrl_scanner} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Choose Your Plan
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg p-8 sm:p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {plan.description}
                </p>
                <p className="sm:text-2xl text-3xl  font-semibold mb-6 text-center">
                  {plan.price}
                </p>
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

      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}

export default Home;
