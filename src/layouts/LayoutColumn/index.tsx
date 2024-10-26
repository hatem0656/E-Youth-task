import { Outlet } from "react-router-dom";
import { useCourseLayoutContext } from "../../providers/CourseLayoutProvider";
import "./index.scss";
import CoursePanel from "../../components/CoursePanel";

const LayoutColumn = () => {
  const { isDrawerOpen } = useCourseLayoutContext();
  return (
    <main
      className={`main-container ${isDrawerOpen ? "main-container--shrink" : ""}`}
    >
      <Outlet />
      <CoursePanel />
    </main>
  );
};

export default LayoutColumn;
