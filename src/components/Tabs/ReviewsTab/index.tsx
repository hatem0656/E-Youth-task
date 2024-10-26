import "./index.scss";
import filledStar from "../../../assets/star-filled.png";
import star from "../../../assets/star.png";
import ReviewsStats from "./ReviewsStats";
import Comments from "./Comments";
const ReviewsTab = () => {
  return (
    <div
      role="tabpanel"
      id="course-panel-tab-5"
      aria-labelledby="course-panel-tab-5"
      className="tab-panel reviews-tab-panel"
    >
      <h2 className="reviews-tab-panel-title">Comments</h2>
      <div className="reviews-tab-panel-rating-container">
        <span className="rating">4.0</span>
        <div className="col">
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={"star" + index}
                src={index < 4 ? filledStar : star}
                alt="star"
              />
            ))}
          </div>
          <p className="rating-number">based on 146,951 ratings</p>
        </div>
      </div>
      <ReviewsStats />
      <Comments />
    </div>
  );
};

export default ReviewsTab;
