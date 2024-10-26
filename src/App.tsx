import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CourseLayout from "./layouts/CourseLayout";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/course/scrum-master" element={<CourseLayout />}>
            <Route path="lecture/:id" element={<Lecture />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
