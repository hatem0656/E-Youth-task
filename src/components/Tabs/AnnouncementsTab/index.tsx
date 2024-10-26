import "./index.scss";
const Announcements = () => {
  return (
    <div
      role="tabpanel"
      id="course-panel-tab-3"
      aria-labelledby="course-panel-tab-3"
      className="tab-panel announcements-tab-panel"
    >
      <h2>No announcements posted yet</h2>
      <p>
        The instructor hasn’t added any announcements to this course yet.
        Announcements are used to inform you of updates or additions to the
        course.
      </p>
    </div>
  );
};

export default Announcements;
