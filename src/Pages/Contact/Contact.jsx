import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
import { useState } from "react";
import { BiNavigation } from "react-icons/bi";

const Contact = () => {
  const [copy, setCopy] = useState(false);
  const handleClipboard = () => {
    let number = "9310018360";
    navigator.clipboard.writeText(number);
    setCopy((prev) => !prev);
  };
  return (
    <div className="w-full text-white font-funnelDisplay">
      <div className="contact-us">
        <h1 className="py-8 mt-[5rem] text-5xl ">Contact Us</h1>
      </div>
      <div className="contact-info flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
        <div className="info w-full flex md:flex-row flex-col gap-10 justify-between">
          <div className="w-full md:mt-[4rem]">
            <h1 className="text-3xl py-4 text-gray-300 flex items-center gap-2">
              Location
              <IoLocationSharp className="text-2xl" />
            </h1>
            <div className="text-xl font-funnelFont tracking-wider">
              <p>S-1207, Officer City - 1</p>
              <p>Rajnagar Extention, Ghaziabad</p>
              <p>Uttar Pradesh - 201017</p>
            </div>
            <h1 className="text-3xl py-4 text-gray-300 flex items-center gap-3">
              Telephone
              <FaPhoneAlt className="text-xl" />
            </h1>
            <div className="text-xl font-funnelFont tracking-wider flex gap-1">
              <img
                src="/images/india.png"
                alt="india-flag"
                className="w-[1.8rem]"
              />
              <span
                className={`hover:bg-blue-800 cursor-pointer selection:bg-black ${
                  copy && "bg-blue-800"
                } px-1 rounded-sm`}
              >
                +91 9310018360
              </span>
              <div className="btn relative">
                {copy && (
                  <div className="text-sm absolute animate-bounce top-[-2rem] bg-zinc-800 py-1 rounded-md px-1 -right-4">
                    Copied
                  </div>
                )}
                <button
                  onClick={handleClipboard}
                  title="copy number"
                  className="px-2 active:scale-[0.86]"
                >
                  <BsCopy />
                </button>
              </div>
            </div>
          </div>
          <div className="map-section w-full p-2 flex flex-col items-center justify-center gap-5">
            <div className="w-full text-center flex items-center justify-center gap-4">
              <a
                title="Get direction"
                className="bg-blue-600 flex items-center justify-center gap-2 hover:bg-blue-500 px-4 py-2 text-xl rounded-sm"
                href="https://maps.app.goo.gl/41pC1ocDwRWyNvTX8"
              >
                Get Direction
                <BiNavigation className="text-2xl" />
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.223994286673!2d77.4252854!3d28.7029255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a863e40c5b%3A0x8de40464638ebe8e!2sFuzion%20Music%20Academy!5e0!3m2!1sen!2sin!4v1731697864311!5m2!1sen!2sin"
              width="600"
              height="450"
              className="w-[18rem] md:w-[30rem] h-[18rem] md:h-[30rem]"
              style={{
                marginRight: 0 + "em",

                borderRadius: 2 + "%",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
