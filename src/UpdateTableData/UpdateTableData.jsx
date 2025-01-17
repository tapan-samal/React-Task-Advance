import React, { useState } from "react";
import RenderComponent from "./RenderComp";
import { studentData } from "./student-data";

const UpdateTableData = () => {
  const [students, setStudents] = useState(studentData);
  const [selectedName, setSelectedName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleUpdateTotalMark = () => {
    if (!selectedName || !selectedSubject || inputValue === "") {
      alert("Please select a name, subject, and enter a valid mark!");
      return;
    }

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.name === selectedName
          ? {
              ...student,
              marks: {
                ...student.marks,
                [selectedSubject]: Number(inputValue),
              },
            }
          : student
      )
    );
    setInputValue("");
  };

  return (
    <div>
      <h1>Student Marks Update</h1>
      <RenderComponent
        students={students}
        handleUpdateTotalMark={handleUpdateTotalMark}
        setSelectedName={setSelectedName}
        setSelectedSubject={setSelectedSubject}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </div>
  );
};

export default UpdateTableData;
