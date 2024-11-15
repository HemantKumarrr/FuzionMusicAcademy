import CourseCard from "./CourseCard";
import { courseItem } from "../../constants/courseItem";

const CoursesPage = () => {
  return (
    <>
      <div className="gradBg">
        <div className="">
          <h1 className="text-5xl text-white text-center py-8 font-semibold font-funnelDisplay">
            All Courses
          </h1>
          <p></p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="card-container px-4 md:px-14 flex items-center justify-start gap-10 flex-wrap py-8">
            {courseItem.map((item) => {
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
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
