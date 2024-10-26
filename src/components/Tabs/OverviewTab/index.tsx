import graduationHat from "../../../assets/graduation-hat.png";
import file from "../../../assets/file.png";
import "./index.scss";
const OverviewTab = () => {
  return (
    <div
      role="tabpanel"
      id={`course-panel-tab-1`}
      aria-labelledby={`course-panel-tab-1`}
      className="tab-panel overview-tab-panel"
    >
      <p className="overview-heading">
        A practical guide to anyone starting a career as a scrum master helping
        them tackle many daily situations
      </p>
      <div className="course-info">
        <div className="course-info-item">
          <img src={graduationHat} alt="graduation hat" />
          <p>156 Students</p>
        </div>
        <div className="course-info-item">
          <img src={graduationHat} alt="graduation hat" />
          <p>156 Students</p>
        </div>
      </div>
      <div className="course-info">
        <div className="course-info-item">
          <img src={file} alt="file" />
          <p>20 lessons</p>
        </div>
        <div className="course-info-item">
          <img src={file} alt="file" />
          <p>33 total mins</p>
        </div>
      </div>
      <h2>Description:</h2>
      <p className="description">
        This course is a practical guide for people who are starting a career as
        a scrum master, or it's also suitable for the teams adopting an Agile
        mindset to have a daily and practical guide to help them in their daily
        challenges and lead them towards continuous improvement.
      </p>
    </div>
  );
};

export default OverviewTab;
