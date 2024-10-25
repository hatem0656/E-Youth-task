export type Lecture = {
  name: string;
  isFinished: boolean;
  duration: number;
  videoSrc?: string;
};

export type Section = {
  name: string;
  lectures: Lecture[];
};
export type Course = {
  name: string;
  sections: Section[];
};
