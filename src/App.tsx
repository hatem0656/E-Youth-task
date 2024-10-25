import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CourseLayout from "./layouts/CourseLayout";
import Lecture from "./pages/Lecture";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
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
