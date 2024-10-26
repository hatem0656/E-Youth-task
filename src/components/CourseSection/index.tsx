import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { getCourseData } from "../../helpers/getCourseData";
import { Lecture } from "../../types";
import ArrowUpwardIcon from "../svgs/ArrowUpwardIcon";
import CheckedIcon from "../svgs/CheckedIcon";
import PlayIcon from "../svgs/PlayIcon";
import "./index.scss";
import { Link } from "react-router-dom";
import { lecturePageRoute } from "../../constants";

export default function CourseSection() {
  const course = getCourseData();
  const getFinishedLectures = (lectures: Lecture[]) => {
    return lectures.filter((lecture) => lecture.isFinished);
  };
  const getSectionDuration = (lectures: Lecture[]) => {
    return lectures.reduce((acc, lecture) => acc + lecture.duration, 0);
  };
  return (
    <div>
      {course.sections.map((section, index) => (
        <Accordion
          defaultExpanded={index === 0}
          key={section.name}
          style={{ margin: "0", boxShadow: "none" }}
          sx={{
            margin: 0,
            "& .MuiButtonBase-root": {
              gap: "1rem",
              alignItems: "center",
              background:
                "linear-gradient(180deg, rgba(187, 150, 150, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)",
              paddingBlock: "1rem",
              paddingInlineStart: "0.5rem",
              paddingInlineEnd: "1.9rem",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowUpwardIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <div className="section-header">
              <PlayIcon />
              <h2>
                Section {index + 1} : {section.name}
              </h2>
            </div>
            <span className="section-info">
              {getFinishedLectures(section.lectures).length}/
              {section.lectures.length} | {getSectionDuration(section.lectures)}
              min
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="section-lectures-container">
              {section.lectures.map((lecture) => (
                <Link
                  to={`${lecturePageRoute}${lecture.id}`}
                  className="section-lecture-wrapper"
                  key={lecture.name}
                >
                  <PlayIcon />
                  <h2
                    className={`section-lecture-name ${lecture.isFinished ? "section-lecture-na me--finished" : ""}`}
                  >
                    {lecture.name}
                  </h2>

                  {lecture.isFinished && <CheckedIcon />}
                  {!lecture.isFinished && <span className="not-checked"></span>}
                  <span className="section-lecture-duration">
                    {lecture.duration}min
                  </span>
                </Link>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
