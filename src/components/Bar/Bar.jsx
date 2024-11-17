import { FaWhatsapp } from "react-icons/fa";

const Bar = () => {
  return (
    <div className="card text-white">
      <div className="bg-green-700 w-[3.4rem] p-2 flex items-start justify-center rounded-full">
        <FaWhatsapp className="text-4xl" />
      </div>
    </div>
  );
};

export default Bar;
