import { motion, useAnimation } from "framer-motion";
import "./ImageCarousel.css";
import { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const repeatedImages = [...images];
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(true);

  const startAnimation = () => {
    controls.start({
      x: -100 * (images.length - 1) + "%", // Move from start to end
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Control the speed here
          ease: "linear",
        },
      },
    });
  };

  const handleClick = () => {
    if (isPaused) {
      controls.start({
        x: -100 * (images.length - 1) + "%",
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Adjust for speed
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }

    setIsPaused(!isPaused);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="carousel w-full" onClick={handleClick}>
      <motion.div
        className="carousel-track"
        initial={{ x: 0 }}
        animate={controls}
      >
        {repeatedImages.map((src, index) => (
          <motion.img
            loading="lazy"
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="carousel-image object-cover object-center px-8 md:h-[25rem]"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
