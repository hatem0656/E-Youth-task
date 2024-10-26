export type Lecture = {
  id: string;
  name: string;
  isFinished: boolean;
  duration: number;
  videoId: string;
};

export type Section = {
  name: string;
  lectures: Lecture[];
};
export type Course = {
  name: string;
  sections: Section[];
};
