import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import { showSlideImages } from "../../constants/showSlideImages";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Contact from "../Contact/Contact";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % showSlideImages.length);
        setFadeOut(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gradBg scroll-smooth h-full px-[2rem] md:px-[10rem]">
      <div className="w-full h-full">
        <div className="w-full h-[calc(100vh-102px)] md:h-[calc(100vh-52px)] gap-10 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-start md:text-center font-funnelDisplay tracking-wider uppercase font-semibold text-white">
            Fuzion Music Academy
            <p className="text-[12px] md:text-sm pt-4 text-gray-400">
              Dream it. Believe it. Achieve it.
            </p>
          </h1>
          <ImageCarousel images={showSlideImages} />
        </div>
      </div>
      <div className="courses-section w-full py-8">
        <Courses />
      </div>
      <div className="certified-section">
        <div className="text-white font-funnelDisplay font-semibold">
          <h1 className="text-4xl md:text-5xl md:tracking-wider flex items-center justify-center gap-2">
            Get Certified{" "}
            <span>
              <img
                src="/images/badge.png"
                alt="badge"
                className="w-8 md:w-12"
              />
            </span>
          </h1>
          <p className="text-sm text-gray-400 tracking-wider text-center py-4 font-funnelFont font-thin">
            After completing your courses you will get a Certificate of
            Completion
          </p>
          <div className="image rounded-lg bg-blue-900/20 flex items-center justify-center">
            <img
              src="/images/certificate.png"
              alt="certificate"
              className="w-[10rem] md:w-[25rem] py-8 transition-all ease-in hover:scale-[1.06]"
            />
          </div>
        </div>
      </div>
      <div className="contact-section py-12">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
