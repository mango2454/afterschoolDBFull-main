import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";
import "./AttendStudentItem.css";

const AttendStudentItem = () => {
  const { registerData, setPopup, setListPopup, setSelectedStudent, selectedDate } = useContext(TeacherContext);
  const [attendanceMap, setAttendanceMap] = useState({}); // { studentNumber: { status, reason } }

  // 선택 날짜 기준 출결 상태 가져오기
  useEffect(() => {
    const fetchAttendance = async () => {
      if (!selectedDate) return;

      const newMap = {};
      for (const student of registerData) {
        try {
          const res = await fetch(
            `http://localhost:8083/afterschool_(1)/getAttendanceByDate.jsp?student_id=${student.studentNumber}&afterschool_id=${student.afterschool_id}&date=${selectedDate}`
          );
          const data = await res.json(); // { status, reason }
          newMap[student.studentNumber] = data;
        } catch (err) {
          console.error("출결정보 불러오기 실패:", err);
          newMap[student.studentNumber] = { status: "-", reason: "-" };
        }
      }
      setAttendanceMap(newMap);
    };

    fetchAttendance();
  }, [registerData, selectedDate]);

  return (
    <div>
      {registerData.length === 0 && <p>승인된 학생이 없습니다.</p>}

      {registerData.map((item) => {
        const attendInfo = attendanceMap[item.studentNumber] || { status: "-", reason: "-" };
        return (
          <div className="AttendStudentItem" key={item.studentNumber || item.name}>
            <div><h3>{item.name}</h3></div>
            <div><h3>{item.studentNumber}</h3></div>
            <div><h3>{attendInfo.status}</h3></div>
            <div><h3>{attendInfo.reason}</h3></div>
            <div className="AttendStudentItemBtn">
              <button
                onClick={() => {
                  setSelectedStudent({
                    studentNumber: item.studentNumber,
                    name: item.name,
                    afterschool_id: item.afterschool_id,
                  });
                  setListPopup(true);
                }}
              >
                통계
              </button>

              <button
                onClick={() => {
                  setSelectedStudent({
                    studentNumber: item.studentNumber,
                    name: item.name,
                    afterschool_id: item.afterschool_id,
                  });
                  setPopup(true);
                }}
              >
                수정
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendStudentItem;
