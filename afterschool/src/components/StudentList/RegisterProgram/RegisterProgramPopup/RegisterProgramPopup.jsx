import { useContext, useEffect, useState } from "react";
import "./RegisterProgramPopup.css";
import { TeacherContext } from "../../../../context/TeacherContext";

const RegisterProgramPopup = () => {
  const { setProgramPopup } = useContext(TeacherContext);
  const [stats, setStats] = useState({
    attend: 0,
    absent: 0,
    excused: 0,
    attendanceRate: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // localStorage에서 정확한 학번과 방과후 ID 가져오기
        const student_id = localStorage.getItem("student_id");
        const afterschool_id = localStorage.getItem("afterschool_id");

        if (!student_id || !afterschool_id) {
          console.error("student_id 또는 afterschool_id가 없습니다.");
          return;
        }

        const res = await fetch(
          `http://localhost:8083/afterschool_(1)/getMyAttendanceStats.jsp?student_id=${student_id}&afterschool_id=${afterschool_id}`
        );

        const data = await res.json();

        // 전체 출석률 계산
        const total = (data.attend || 0) + (data.absent || 0) + (data.excused || 0);
        const attendanceRate = total === 0 ? 0 : Math.round((data.attend / total) * 100);

        setStats({ ...data, attendanceRate });
      } catch (err) {
        console.error("출석 정보 불러오기 실패:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="AttendListPopup">
      <div className="AttendListPopupTitle">
        <h1>나의 출석률</h1>
        <h2 onClick={() => setProgramPopup(false)}>X</h2>
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
      </div>

      <div className="AttendListContent2">
        <div>
          <h3>사유</h3>
          <div><h2>{stats.excused}</h2></div>
        </div>
        <div>
          <h3>출석률</h3>
          <div><h2>{stats.attendanceRate}%</h2></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterProgramPopup;
