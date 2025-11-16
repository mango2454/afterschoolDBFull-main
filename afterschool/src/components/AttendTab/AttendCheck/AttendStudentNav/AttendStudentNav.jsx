import "./AttendStudentNav.css";
import { useContext } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";

const AttendStudentNav = () => {
  const { selectedTitle, selectedDate, setSelectedDate } = useContext(TeacherContext);

  return (
    <div className="AttendStudentNav">
      <div className="AttendStudentNavTitle">
        <h1>{selectedTitle || "방과후 선택"}</h1>
      </div>
      <div className="AttendStudentNavContent">
        <h3>날짜선택</h3>
        <input
          type="date"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AttendStudentNav;
