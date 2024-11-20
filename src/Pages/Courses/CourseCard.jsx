import { Link } from "react-router-dom";

const CourseCard = ({ image, title, desc }) => {
  return (
    <div className="card cursor-pointer transition-all ease-in hover:shadow-lg hover:scale-[1.050] w-[20rem] h-full md:h-[24rem] rounded-lg bg-blue-900/30 border border-gray-600">
      <div className="car-image rounded-lg">
        <img
          loading="lazy"
          className="w-full h-[10rem] rounded-t-lg object-cover object-center"
          src={image}
          alt="course-image"
        />
      </div>
      <div className="card-info p-4 flex flex-col gap-4 text-white font-funnelDisplay">
        <div className="md:h-[8rem]">
          <h1 className="text-3xl">{title}</h1>
          <div className="desc py-2 text-sm text-blue-300">
            <p>{desc}</p>
          </div>
        </div>

        <div className="">
          <Link to="https://wa.me/message/LZIPHDYS54GHC1">
            <button className="bg-blue-800 hover:bg-blue-700 w-full py-2 text-xl hover:shadow-md rounded-md">
              Get Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
