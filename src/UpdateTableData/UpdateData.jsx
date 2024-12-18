import React, { useState } from "react";
import RenderComponent from "./RenderComp"

const UpdateData = () => {
  const studentLists = [
    {
      id: 101,
      name: "MS Dhoni",
      marks: {
        math: 85,
        acc: 78,
        tax: 92,
      },
    },
    {
      id: 102,
      name: "Rahul D",
      marks: {
        math: 90,
        acc: 88,
        tax: 95,
      },
    },
    {
      id: 103,
      name: "R Jadeja",
      marks: {
        math: 76,
        acc: 84,
        tax: 89,
      },
    },
    {
      id: 104,
      name: "R Sharma",
      marks: {
        math: 68,
        acc: 72,
        tax: 80,
      },
    },
    {
      id: 105,
      name: "Virat K",
      marks: {
        math: 92,
        acc: 89,
        tax: 94,
      },
    },
  ];

  const [students, setStudents] = useState(studentLists);
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

export default UpdateData;
