import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useEffect } from "react";
import { useCourseLayoutContext } from "../../providers/CourseLayoutProvider";
import CourseContent from "../CourseContent";
import ArrowLeft from "../svgs/ArrowLeft";
import "./index.scss";

type Props = {};

const CourseContentDrawer = (props: Props) => {
  const { isDrawerOpen, setIsDrawerOpen } = useCourseLayoutContext();

  const openDrawer = () => {
    setIsDrawerOpen(true);
    localStorage.setItem("isDrawerOpen", "true");
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    localStorage.setItem("isDrawerOpen", "false");
  };
  useEffect(() => {
    let storedValue = localStorage.getItem("isDrawerOpen");
    if (!storedValue) {
      localStorage.setItem("isDrawerOpen", "false");
    } else {
      setIsDrawerOpen(storedValue === "true");
    }
  }, []);
  return (
    <>
      <button
        className="course-content-drawer-open-button"
        onClick={openDrawer}
      >
        <ArrowLeft />
        <span>Course Content</span>
      </button>
      <SwipeableDrawer
        id="course-content-drawer"
        anchor={"right"}
        open={isDrawerOpen}
        onClose={() => {}}
        onOpen={() => {}}
        classes={{ paper: "course-content-drawer" }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "30rem",
            border: "1px solid #f5f5f5",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          },
          "& .MuiModal-backdrop": {
            display: "none",
          },
        }}
      >
        <CourseContent closeDrawer={closeDrawer} />
      </SwipeableDrawer>
    </>
  );
};

export default CourseContentDrawer;
