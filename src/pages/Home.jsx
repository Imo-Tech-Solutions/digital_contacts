/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import qrl_scanner from "../images/qel_scanner.png";
import arrowIcon from "../images/icons_arrow.svg";
import mobile from "../images/mobile_qrl.svg";
import FeaturesCard from "../components/features";
import ContactUs from "../components/ContactUs";
import woman_with_phone from '../images/woman_with_phone.jpg'
import woman_with_phone2 from '../images/woman_with_phone2.jpg'

import PlanPopup from '../components/plansPopup/PlanPopup.js'

import Accordion from "../components/Accordion";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {



  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openPopup = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedPlan(null);
    setShowPopup(false);
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Simulate submitting the form
    setTimeout(() => {
      console.log("Form values:", values);

      // Handle the uploaded file
      const uploadedFile = values.file;
      if (uploadedFile) {
        console.log("Uploaded file:", uploadedFile);
        // You can upload the file to a server or perform any necessary processing here
      }

      // Close the popup
      closePopup();
      setSubmitting(false);
    }, 1000);
  };

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
      title: "Individuals",
      description: "Registration",
      price: "SLE 750 ",
      features: [
        "Registration",
        "QRCard",
        "Phone case",
      ],
      buttonColor: "bg-purple", // Set the button background color to green
    },
    {
      title: "Businesses 20 Employees",
      description: "Register up to 20 employees",
      price: "SLE 10,000",
      features: [
        "QRCards",
        "B1 Business plaque (tabletop)",
      ],
      buttonColor: "bg-purple",
    },
    {
      title: "Businesses 50 Employees",
      description: "Register up to 50 employees",
      price: "SLE 25,000",
      features: [
        "QRCards",
        "Phone Cases",
        "Landing Page ",
      ],
      buttonColor: "bg-purple", // Set the button background color to red
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
              Create and share your<br />
              <span className="text-purple"> virtual business card  </span>
              with anyone, anywhere with IMO’s DigiCards!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body text-justify">
              Go contactless and stay eco-friendly with our digital business cards. Instead of printing 200 cards,
              you only need one QR code containing all your contact details that can be scanned and your information
              is automatically saved in the phone. Are you excited yet? Well, don’t waste any more time. Take a look
              at our products!{" "}
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

      <section className="my-20 sm:my-16 border-b ">
        <h2
          className="text-4xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6"
          id="features"
          data-aos="fade-right"
        >
          Products
        </h2>
        <FeaturesCard />
      </section>

      <section class="bg-white border-b py-8" id="">
        <div class="max-w-fit w-4/5 mx-auto m-8">
          <div className="text-center py-2 flex flex-col items-center justify-center">
            <p
              className="text-4xl font-bold leading-none sm:text-3xl
          text-purple-header mt-6"
            >
              Advantages of Digital Business Cards with QR Codes.
            </p>
            <div className="w-16 h-1 bg-purple mt-2" data-aos="fade-right">
              {" "}
            </div>
          </div>

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row
            bg-gray-100 border-b justify-center items-center"
            data-aos="fade-up"
          >
            <div class="w-full sm:w-1/2 p-6">
              <div className="text-gray-600">

                <p
              className="
              text-2x1 leading-none sm:text-2xl
              text-purple-header my-6
              "
            >
              Benefits for Companies:
            </p>

                < span className="text-gray-700 font-bold"> ✅ Eco-Friendly: </span>
                Digital business cards eliminate the need for paper, reducing your company's
                environmental footprint and contributing to sustainability efforts. < br/>


                < span className="text-gray-700 font-bold">✅ Cost Savings: </span>
                Printing and designing traditional business cards can be expensive, especially for
                larger teams. Digital business cards are a one-time investment and can be easily updated without
                additional costs. <br />


                < span className="text-gray-700 font-bold">✅ Easy Distribution: </span>
                Sharing digital business cards is as simple as sending a link or displaying a QR
                code, saving time and effort compared to physically handing out cards. <br />


                < span className="text-gray-700 font-bold">✅ Analytics: </span>
                With digital cards, you can track how many times your card has been viewed or scanned,
                providing valuable insights into the effectiveness of your networking efforts. <br />


                < span className="text-gray-700 font-bold">✅ Enhanced Branding: </span>
                Digital business cards can include multimedia elements like your company logo,
                images, videos, and links to social media, helping you create a stronger and more dynamic brand
                identity. <br />


                < span className="text-gray-700 font-bold">✅ Instant Updates: </span>
                  Company information can change over time. Digital cards allow you to update contact
                  details, promotions, or other information in real-time, ensuring recipients always have the most
                  accurate information.

              </div>
            </div>
            <div class="sm:w-2/4 w-full p-6 sm:order-first ">
              <img class="w-full" src={woman_with_phone} alt="image" />
            </div>
          </div>


          <div class="flex flex-wrap flex-col sm:flex-row bg-gray-100 border-b justify-center items-center" data-aos="fade-up">
            <div class="w-full sm:w-2/4 p-6 sm:order-last text-right">
                <img class="w-full" src={woman_with_phone2} alt="image" />
            </div>
            <div class="w-full sm:w-2/4 p-6">
                <div class="text-gray-600">
                    <p class="text-2xl leading-none sm:text-2xl text-purple-header my-6">
                        Benefits for Individuals:
                    </p>

                      < span className="text-gray-700 font-bold">✅ Convenience: </span>
                      People often misplace or run out of traditional business cards. With a digital
                      card stored on their smartphones, contacts are always just a click away. <br/>


                      < span className="text-gray-700 font-bold">✅ Reduced Clutter: </span>
                      Traditional business cards can accumulate and clutter wallets or desk drawers.
                      Digital cards eliminate this physical clutter, providing a cleaner and more organized approach. <br />


                      < span className="text-gray-700 font-bold">✅ Easy Sharing: </span>
                      Sharing contact information is seamless – recipients can scan the QR code with
                      their smartphone's camera to instantly save your details, eliminating the need for manual
                      data entry. <br />


                      < span className="text-gray-700 font-bold">✅ Versatility: </span>
                      Digital cards can be shared across various platforms, including email, messaging
                      apps, and social media. This flexibility makes it easier to connect in the recipient's
                      preferred way. <br />


                      < span className="text-gray-700 font-bold">✅ Interactive Elements: </span>
                      Digital cards can include interactive features like clickable links to
                      portfolios, LinkedIn profiles, or product pages, allowing recipients to engage with your
                      content directly. <br/>


                      < span className="text-gray-700 font-bold">✅ Always Up-to-Date:</span>
                      When your information changes, there's no need to print new cards. Digital
                      cards can be updated instantly, ensuring your contacts always have accurate details. <br/>


                      < span className="text-gray-700 font-bold">✅ Professional Impression:</span>
                      Embracing digital technology showcases your adaptability and modern
                      approach to networking, leaving a positive impression on tech-savvy colleagues and partners.<br/>

                </div>
            </div>
        </div>
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
            <div class="sm:w-2/5 w-1/2 p-6 sm:order-first ">
              <img class="w-full" src={qrl_scanner} alt="image" />
            </div>
          </div>
        </div>
      </section>





      <section className="bg-white py-16" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Our packages
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
                <p className="sm:text-2xl text-3xl font-semibold mb-6 text-center">
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
                        {/* SVG path */}
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openPopup(plan)}
                  className={`text-white rounded-md py-3 px-6 font-semibold hover:opacity-90
                  focus:outline-none ${plan.buttonColor}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Render the popup */}
        {showPopup && selectedPlan && (
          <PlanPopup
            plan={selectedPlan}
            onClose={closePopup}
            onSubmit={onSubmit}
          />
        )}
      </section>





      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}

export default Home;
