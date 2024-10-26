import { Lecture } from "../types";
export const lecturePageRoute = "/course/scrum-master/lecture/";
type FAQ = {
  question: string;
  answer: string;
};
export const faqs: FAQ[] = [
  {
    question: "What Does Royalty Free Mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "What Does Royalty Free Mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "What Does Royalty Free Mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
];

export const courseLectures: Lecture[] = [
  {
    id: "1",
    name: "How it started",
    isFinished: true,
    duration: 2,
    videoId: "2pZmKW9-I_k",
  },
  {
    id: "2",
    name: "Scrum master in scrum guide",
    isFinished: true,
    duration: 2,
    videoId: "iTZ1-85I77c",
  },
  {
    id: "3",
    name: "Coaching the team",
    isFinished: false,
    duration: 2,
    videoId: "0DzDqtcxnz0",
  },
  {
    id: "4",
    name: "Manage team members",
    isFinished: true,
    duration: 2,
    videoId: "157NopQ-chU",
  },
  {
    id: "5",
    name: "Schedule Meetings",
    isFinished: false,
    duration: 2,
    videoId: "__92ek8Xh4o",
  },
  {
    id: "6",
    name: "Sprint planning",
    isFinished: false,
    duration: 2,
    videoId: "nm9P2vnS9_I",
  },
  {
    id: "7",
    name: "How it started",
    isFinished: true,
    duration: 2,
    videoId: "Y4IiQY9dNRA",
  },
  {
    id: "8",
    name: "Scrum master in scrum guide",
    isFinished: true,
    duration: 2,
    videoId: "jXoSaX_yFh4",
  },
  {
    id: "9",
    name: "Coaching the team",
    isFinished: true,
    duration: 2,
    videoId: "AmpwfbdFYL8",
  },
];
