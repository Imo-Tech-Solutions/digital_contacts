import React from 'react';
import phoneCase from '../images/phone_case.png';
import keyHolder from '../images/key_handle.png'
import business from "../images/business _plaques.png";
import qrl from '../images/qrl_scan2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  {
    id: 1,
    icon: phoneCase,
    heading: `Phone case SLE 300`,
  },
  {
    id: 2,
    icon: keyHolder,
    heading: `Key hanger Coming Soon`,
  },
  {
    id: 3,
    icon: business,
    heading: `Business Plaques SLE 1,000`,
  },
  {
    id: 4,
    icon: qrl,
    heading: `QRCard SLE 250`,
  },
];

const Card = ({ icon, heading, description }) => {

  // Initialize AOS library
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-auto sm:w-96  max-w-md px-6 py-6
      rounded-lg  bg-white
      border-2"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-center
                      mb-4 w-full h-full">
          <img className="w-full h-56 transition-transform
          duration-700 rounded-md
          transform-gpu hover:scale-105"
          src={icon} alt="Icon" />
      </div>
      <h2 className="text-lg font-semibold">{heading}</h2>
      <br />
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  );
};

const FeaturesCard = () => {
  return (
    <div className="flex flex-wrap w-full justify-center items-center">
      {cardData.map((card) => (
        <div className="w-full sm:w-4/5 lg:w-1/3 xl:w-1/4 p-4
        flex justify-center items-center" key={card.id}>
          <Card
            icon={card.icon}
            heading={card.heading}
            // description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturesCard;
