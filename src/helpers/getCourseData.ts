import { Course } from "../types";

const ScrumMasterCourse: Course = {
  name: "Scrum Master",
  sections: [
    {
      name: "Introduction",
      lectures: [
        {
          name: "How it started",
          isFinished: true,
          duration: 2,
        },
        {
          name: "Scrum master in scrum guide",
          isFinished: true,
          duration: 2,
        },
        {
          name: "Coaching the team",
          isFinished: false,
          duration: 2,
        },
      ],
    },
    {
      name: "How to become a Scrum Master",
      lectures: [
        {
          name: "How it started",
          isFinished: true,
          duration: 2,
        },
        {
          name: "Scrum master in scrum guide",
          isFinished: false,
          duration: 2,
        },
        {
          name: "Coaching the team",
          isFinished: false,
          duration: 2,
        },
      ],
    },
    {
      name: "Final Section",
      lectures: [
        {
          name: "How it started",
          isFinished: true,
          duration: 2,
        },
        {
          name: "Scrum master in scrum guide",
          isFinished: true,
          duration: 2,
        },
        {
          name: "Coaching the team",
          isFinished: true,
          duration: 2,
        },
      ],
    },
  ],
};

export const getCourseData = (): Course => {
  return ScrumMasterCourse;
};
