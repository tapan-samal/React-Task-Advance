import React, { useEffect, useState } from "react";
import { holidays } from "./holidays-list";
import "./calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    // Adjust start day for Monday-based week (0 = Monday, 6 = Sunday)
    const rawStartDay = new Date(year, month, 1).getDay();
    const adjustedStartDay = (rawStartDay - 1 + 7) % 7;

    setDaysInMonth(days);
    setStartDay(adjustedStartDay);
  }, [currentDate]);

  const daysName = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1)));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="calendarr">
      <div className="cal-header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="day-names">
        {daysName.map((day) => (
          <div className="day-name" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index} className="empty-day"></div>
        ))}
        {daysInMonth.map((day) => {
          const formattedDate = formatDate(day);
          const holiday = holidays[formattedDate];
          return (
            <div
              key={day}
              className={`day ${
                day.toDateString() === new Date().toDateString() ? "today" : ""
              } ${
                selectedDate && day.toDateString() === selectedDate.toDateString() ? "selected" : ""
              } ${holiday ? "holiday" : ""}`}
              title={holiday || ""}
              onClick={() => handleDateClick(day)}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
