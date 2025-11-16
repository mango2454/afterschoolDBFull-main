import { useContext, useState } from "react";
import "./AttendPopUp.css";
import { TeacherContext } from "../../../../context/TeacherContext";

const AttendPopUp = () => {
  const { setPopup, selectedStudent, selectedTitle, selectedDate } =
    useContext(TeacherContext);

  const [status, setStatus] = useState("");
  const [reason, setReason] = useState("");

  const handleStatus = (type) => {
    setStatus(type);
    if (type !== "사유") setReason("");
  };

  const handleRegister = async () => {
    const studentNumber = selectedStudent?.studentNumber || "";
    const afterschool_id = selectedStudent?.afterschool_id || 0;

    if (!studentNumber || !afterschool_id)
      return alert("학생 정보가 완전하지 않습니다.");
    if (!status) return alert("출결 상태를 선택해주세요.");
    if (status === "사유" && !reason.trim())
      return alert("사유를 입력해주세요.");
    if (!selectedDate) return alert("날짜를 선택해주세요.");

    const params = new URLSearchParams();
    params.append("student_id", studentNumber);
    params.append("afterschool_id", afterschool_id);
    params.append("date", selectedDate);
    params.append("status", status);
    params.append("reason", reason);

    try {
      const res = await fetch(
        "http://localhost:8083/afterschool_(1)/registerAttendance.jsp",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        }
      );

      const text = await res.text();
      if (text.trim() === "success") {
        alert("출결이 등록되었습니다.");
        setPopup(false);
      } else {
        alert("등록 실패: " + text);
      }
    } catch (err) {
      console.error(err);
      alert("서버 오류");
    }
  };

  if (!selectedStudent) return null;

  return (
    <div className="AttendPopUp">
      <div className="AttendPopUpTitle">
        <h1>출석정보 수정</h1>
        <h2 onClick={() => setPopup(false)}>X</h2>
      </div>

      <div className="AttendPopUpContent">
        <div className="AttendPopUpContentDiv">
          <ul>
            <li>{selectedStudent.name}</li>
            <li>{selectedStudent.studentNumber}</li>
            <li>{selectedTitle}</li>
          </ul>
        </div>
        <div className="AttendPopUpContentDate">
          <h3>{selectedDate || "날짜 미선택"}</h3>
        </div>
      </div>

      <div className="AttendPopUpContent2">
        <h3>출석상태</h3>
        <div>
          <button
            className={status === "출석" ? "active" : ""}
            onClick={() => handleStatus("출석")}
          >
            출석
          </button>
          <button
            className={status === "결석" ? "active" : ""}
            onClick={() => handleStatus("결석")}
          >
            결석
          </button>
          <button
            className={status === "사유" ? "active" : ""}
            onClick={() => handleStatus("사유")}
          >
            사유
          </button>
        </div>
      </div>

      {status === "사유" && (
        <div className="AttendPopUpContent3">
          <h3>사유</h3>
          <textarea
            className="AttendPopUpInput"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="사유를 적어주세요"
          />
        </div>
      )}

      <div className="AttendPopUpBtn">
        <button onClick={handleRegister}>등록하기</button>
      </div>
    </div>
  );
};

export default AttendPopUp;
