import { courseItem } from "../../constants/courseItem";
import CourseCard from "./CourseCard";
import ExploreButton from "../../components/Buttons/ExploreButton";

const Courses = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="">
        <h1 className="py-6 font-semibold hover:text-white cursor-default text-gray-300 text-5xl w-full text-center">
          Courses
        </h1>
        <div className="text-white border flex items-center justify-center font-funnelDisplay font-semibold rounded-md">
          <span className="px-4 rounded-l-md text-xl bg-green-700">
            Offline
          </span>
          <span className="px-2 text-xl text-green-600 rounded-md">Online</span>
        </div>
      </div>
      <div className="card-container flex w-full items-center justify-center gap-10 flex-wrap py-5">
        {courseItem.slice(0, 3).map((item) => {
          return (
            <CourseCard
              key={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
      <div className="expore-btn pb-8">
        <ExploreButton />
      </div>
    </div>
  );
};

export default Courses;
