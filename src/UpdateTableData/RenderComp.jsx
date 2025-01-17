import React from "react";

const RenderComponent = ({
  students,
  handleUpdateTotalMark,
  setSelectedName,
  setSelectedSubject,
  setInputValue,
  inputValue,
}) => {
  const subjects = students.length > 0 ? Object.keys(students[0].marks) : [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <table border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Math</th>
            <th>Tax</th>
            <th>Acc</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks.math}</td>
              <td>{student.marks.tax}</td>
              <td>{student.marks.acc}</td>
              <td>
                <b>
                  {student.marks.math + student.marks.tax + student.marks.acc}
                </b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <select
          style={{ padding: "6px" }}
          defaultValue=""
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="" disabled>
            Select Name
          </option>
          {students.map((student) => (
            <option value={student.name} key={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        <select
          style={{ padding: "6px" }}
          defaultValue=""
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="" disabled>
            Select Subject
          </option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <input
          style={{ padding: "6px" }}
          type="number"
          placeholder="Enter Mark"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        style={{ margin: "0" }}
        type="button"
        onClick={handleUpdateTotalMark}
      >
        Update
      </button>
    </div>
  );
};

export default RenderComponent;
