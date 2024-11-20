import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className="card text-white">
      <Link
        to="https://wa.me/message/LZIPHDYS54GHC1"
        className="bg-green-600 w-[3.4rem] p-2 flex items-start justify-center rounded-full"
      >
        <FaWhatsapp className="text-4xl" />
      </Link>
    </div>
  );
};

export default Bar;
