import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Lecture = (props: Props) => {
  const { id } = useParams(); // Get the dynamic lecture ID from the route

  return (
    <div>
      <h2>Lecture {id}</h2>
      {/* Here you can load the lecture data based on the id */}
    </div>
  );
};

export default Lecture;
