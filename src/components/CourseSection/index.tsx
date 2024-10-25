import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { getCourseData } from "../../helpers/getCourseData";
import { Lecture } from "../../types";
import ArrowUpwardIcon from "../svgs/ArrowUpwardIcon";
import PlayIcon from "../svgs/PlayIcon";
import "./index.scss";

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
              paddingInlineEnd: "1.8rem",
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
              <div className="section-lecture-icons">
                {section.lectures.map((lecture) => (
                  <>
                    <PlayIcon />
                  </>
                ))}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
