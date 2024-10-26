import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <Link className="go-to-course-btn" to="/course/scrum-master/lecture/1">
      Go to course
    </Link>
  );
};

export default Home;
