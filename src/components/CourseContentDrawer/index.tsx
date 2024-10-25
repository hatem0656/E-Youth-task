import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Key, useState } from "react";
import "./index.scss";
import ArrowLeft from "../svgs/ArrowLeft";
import { Backdrop } from "@mui/material";
import CourseContent from "../CourseContent";

type Props = {};

const CourseContentDrawer = (props: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
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
