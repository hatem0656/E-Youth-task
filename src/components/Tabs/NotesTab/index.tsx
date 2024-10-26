import TextArea from "./TextArea";
import "./index.scss";
const NotesTab = () => {
  return (
    <div
      role="tabpanel"
      id="course-panel-tab-2"
      aria-labelledby="course-panel-tab-2"
      className="tab-panel notes-tab-panel"
    >
      <h2>Add your notice here:</h2>
      <TextArea minRows={8} placeholder="Enter your notice here" />
    </div>
  );
};

export default NotesTab;
