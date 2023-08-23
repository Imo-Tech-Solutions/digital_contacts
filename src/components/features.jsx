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
    heading: `Create Your Digital Business Card`,
    description: `Choose a card design, change colors and fonts as you desire.`,
  },
  {
    id: 2,
    icon: keyHolder,
    heading: `Share Contacts`,
    description: `Exchange your cards easily with NFC, Bluetooth or WiFi. Send your cards to people.`,
  },
  {
    id: 3,
    icon: business,
    heading: `Backup`,
    description: `Back up your cards to your own Google Drive account and do not risk losing them.`,
  },
  {
    id: 3,
    icon: qrl,
    heading: `Backup`,
    description: `Back up your cards to your own Google Drive account and do not risk losing them.`,
  },
];

const Card = ({ icon, heading, description }) => {

  // Initialize AOS library
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-auto sm:w-96  max-w-md px-6 py-10
      rounded-lg  bg-white
      border-2 hover:border-purple
      transition duration-300 ease-in-out"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-center mb-4 bg-red-500">
        <div className="mr-3">
          <img className="w-56 h-56" src={icon} alt="Icon" />
        </div>
      </div>
      <h2 className="text-lg font-semibold">{heading}</h2>
      <br />
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  );
};

const FeaturesCard = () => {
  return (
    <div className="flex flex-wrap w-full justify-center">
      {cardData.map((card) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4" key={card.id}>
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
