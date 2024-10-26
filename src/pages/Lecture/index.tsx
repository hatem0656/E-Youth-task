import "plyr/dist/plyr.css";
import { lazy, Suspense, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { courseLectures, lecturePageRoute } from "../../constants";
import "./index.scss";
type Props = {};
const Plyr = lazy(() => import("plyr-react"));

const Lecture = (props: Props) => {
  const playerRef = useRef(null);
  const { id } = useParams();

  const lectureVideo = courseLectures.find(
    (lecture) => lecture.id === id
  )?.videoId;
  const lectureIndex = courseLectures.findIndex((lecture) => lecture.id === id);
  const prevLectureRoute =
    lectureIndex > 0
      ? `${lecturePageRoute}${courseLectures[lectureIndex - 1].id}`
      : `${lecturePageRoute}${courseLectures[0].id}`;
  const nextLectureRoute =
    lectureIndex < courseLectures.length - 1
      ? `${lecturePageRoute}${courseLectures[lectureIndex + 1].id}`
      : `${lecturePageRoute}${courseLectures[courseLectures.length - 1].id}`;
  const isNextBtnDisabled = lectureIndex === courseLectures.length - 1;
  const isPrevBtnDisabled = lectureIndex === 0;
  return (
    <section className="video-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Plyr
          ref={playerRef}
          source={{
            type: "video",
            sources: [
              {
                src: lectureVideo || "",
                provider: "youtube",
              },
            ],
          }}
        />
      </Suspense>
      <Link
        className={`navigate-btn navigate-btn--prev ${isPrevBtnDisabled ? "navigate-btn--disabled" : ""}`}
        to={prevLectureRoute}
      >
        <span>
          <BsChevronLeft color="#bcbec0" size={"1.4rem"} />
        </span>
      </Link>
      <Link
        className={`navigate-btn navigate-btn--next ${isNextBtnDisabled ? "navigate-btn--disabled" : ""}`}
        to={nextLectureRoute}
      >
        <span>
          <BsChevronRight color="#bcbec0" size={"1.4rem"} />
        </span>
      </Link>
    </section>
  );
};

export default Lecture;
