import CourseContentDrawer from "../components/CourseContentDrawer";
import { CourseLayoutProvider } from "../providers/CourseLayoutProvider";
import LayoutColumn from "./LayoutColumn";

const CourseLayout = () => {
  return (
    <CourseLayoutProvider>
      <LayoutColumn />
      <CourseContentDrawer />
    </CourseLayoutProvider>
  );
};

export default CourseLayout;
