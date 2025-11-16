import { useEffect, useState, useContext } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";
import "./AttendItem.css";

const AttendItem = () => {
  const [afterList, setAfterList] = useState([]);
  const { setAttendActive, setRegisterData, setSelectedTitle } = useContext(TeacherContext);

  useEffect(() => {
    const fetchAfter = async () => {
      try {
        const res = await fetch(
          "http://localhost:8083/afterschool_(1)/GetAfterschoolList.jsp"
        );
        const data = await res.json();
        setAfterList(data);
      } catch (err) {
        console.error("방과후 리스트 불러오기 실패:", err);
      }
    };
    fetchAfter();
  }, []);

  const handleViewStudents = async (item) => {
    try {
      setSelectedTitle(item.title);

      const res = await fetch(
        `http://localhost:8083/afterschool_(1)/GetApprovedStudents.jsp?afterschool_id=${item.id}`
      );
      const data = await res.json();

      const safeData = data.map((student) => ({
        studentNumber: student.studentNumber || student.student_id || "",
        name: student.name || "",
        afterschool_id: student.afterschool_id || 0,
        AttendCheck: student.AttendCheck || "-",
        reason: student.reason || "-"
      }));

      setRegisterData(safeData);
      setAttendActive("student");
    } catch (err) {
      console.error("승인 학생 불러오기 실패:", err);
    }
  };

  return (
    <div>
      {afterList.length === 0 ? (
        <p>방과후가 없습니다.</p>
      ) : (
        afterList.map((item) => (
          <div key={item.id} className="AttendItem">
            <div><h3>{item.title}</h3></div>
            <div><h3>{item.teacher}</h3></div>
            <div><h3>{item.time}</h3></div>
            <div><h3>{item.approved}/{item.max}</h3></div>
            <div className="AttendItemBtn">
              <button onClick={() => handleViewStudents(item)}>인원보기</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AttendItem;
