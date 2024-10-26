import "./index.scss";
import filledStar from "../../../../assets/star-filled.png";
import star from "../../../../assets/star.png";
const percentages = [90, 5, 2, 2, 1];
const Stats = ({ starsNumber }: { starsNumber: number }) => {
  return (
    <div className="stats-item">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={"stats-star" + index}
          src={starsNumber - (index + 1) >= 0 ? filledStar : star}
          alt="star"
        />
      ))}
      <span>{percentages[5 - starsNumber]}%</span>
      <div className="range">
        <div style={{ width: `${percentages[5 - starsNumber]}%` }}></div>
      </div>
    </div>
  );
};
const ReviewsStats = () => {
  return (
    <div className="reviews-stats">
      {Array.from({ length: 5 }, (_, index) => (
        <Stats key={"stats" + index} starsNumber={5 - index} />
      ))}
    </div>
  );
};

export default ReviewsStats;
