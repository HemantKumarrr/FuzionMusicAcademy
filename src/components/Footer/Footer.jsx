import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <div className="text flex items-center justify-center gap-2 text-white text-sm font-funnelDisplay py-2">
        <p className="flex items-center gap-2">
          made by Hemant <FaHeart className="text-red-600" />
        </p>
        <p>@{date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
