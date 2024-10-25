import { IoMdClose } from "react-icons/io";
import "./index.scss";
import CourseSection from "../CourseSection";

type Props = {
  closeDrawer: () => void;
};

const CourseContent = ({ closeDrawer }: Props) => {
  return (
    <div className="course-content-container">
      <div className="course-content-header">
        <h2>Course Content</h2>
        <button onClick={closeDrawer}>
          <IoMdClose size={"1.8rem"} color="#444444" />
        </button>
      </div>
      <CourseSection />
    </div>
  );
};

export default CourseContent;
