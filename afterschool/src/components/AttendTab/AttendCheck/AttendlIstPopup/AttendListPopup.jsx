import { useContext, useEffect, useState } from "react";
import "./AttendListPopup.css";
import { TeacherContext } from "../../../../context/TeacherContext";

const AttendListPopup = () => {
  const { setListPopup, selectedStudent, selectedTitle } = useContext(TeacherContext);
  const [stats, setStats] = useState({ attend: 0, absent: 0, excused: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // studentNumber와 afterschool_id를 사용하도록 수정
        const res = await fetch(
          `http://localhost:8083/afterschool_(1)/getStudentStats.jsp?student_id=${selectedStudent?.studentNumber}&afterschool_id=${selectedStudent?.afterschool_id}`
        );
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("통계 불러오기 실패:", err);
      }
    };

    if (selectedStudent) fetchStats();
  }, [selectedStudent]);

  const totalAttend = stats.attend + stats.absent + stats.excused;
  const totalPercent = totalAttend === 0 ? 0 : Math.round((stats.attend / totalAttend) * 100);

  return (
    <div className="AttendListPopup">
      <div className="AttendListPopupTitle">
        <h1>{selectedStudent?.name} - {selectedTitle}</h1>
        <h2 onClick={() => setListPopup(false)}>X</h2>
      </div>

      <div className="AttendListContent">
        <div>
          <h3>출석</h3>
          <div><h2>{stats.attend}</h2></div>
        </div>
        <div>
          <h3>결석</h3>
          <div><h2>{stats.absent}</h2></div>
        </div>
        <div>
        </div>
      </div>

      <div className="AttendListContent2">
        <div>
            <h3>사유</h3>
          <div><h2>{stats.excused}</h2></div>
        </div>

        <div>
          <h3>출석률</h3>
          <div><h2>{totalPercent}%</h2></div>
        </div>
      </div>

      
    </div>
  );
};

export default AttendListPopup;
