import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useMemo, useState } from "react";
import "./index.scss";
import OverviewTab from "../Tabs/OverviewTab";
import NotesTab from "../Tabs/NotesTab";
import AnnouncementsTab from "../Tabs/AnnouncementsTab";
import FAQsTab from "../Tabs/FAQsTab";
import ReviewsTab from "../Tabs/ReviewsTab";
const CoursePanel = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const changeActiveTabIndex = (event: React.SyntheticEvent, index: number) =>
    setActiveTabIndex(index);
  const coursePanelTabs = useMemo(
    () => [
      {
        name: "Overview",
        component: <OverviewTab />,
      },
      {
        name: "Notes",
        component: <NotesTab />,
      },
      {
        name: "Announcements",
        component: <AnnouncementsTab />,
      },
      {
        name: "FAQs",
        component: <FAQsTab />,
      },
      {
        name: "Reviews",
        component: <ReviewsTab />,
      },
    ],
    []
  );
  return (
    <div className="tabs-navigator-container">
      <Tabs
        value={activeTabIndex}
        onChange={changeActiveTabIndex}
        variant="scrollable"
        scrollButtons={false}
        aria-label="=course tabs navigator"
      >
        {coursePanelTabs.map((tab) => (
          <Tab key={tab.name} label={tab.name} />
        ))}
      </Tabs>

      {coursePanelTabs[activeTabIndex].component}
    </div>
  );
};

export default CoursePanel;
