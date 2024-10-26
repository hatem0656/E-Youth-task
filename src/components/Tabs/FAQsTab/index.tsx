import "./index.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BiChevronDown } from "react-icons/bi";
import { faqs } from "../../../constants";
const FAQsTab = () => {
  return (
    <div
      role="tabpanel"
      id="course-panel-tab-4"
      aria-labelledby="course-panel-tab-4"
      className="tab-panel faqs-tab-panel"
    >
      {faqs.map((faq, index) => (
        <Accordion defaultExpanded={index === 0} key={"panel" + index}>
          <AccordionSummary
            expandIcon={<BiChevronDown size={"1.8rem"} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {faq.question}
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQsTab;
