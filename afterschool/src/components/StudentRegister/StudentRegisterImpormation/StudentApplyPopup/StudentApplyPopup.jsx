import { useState, useContext } from "react";
import axios from "axios";
import "./StudentApplyPopup.css";
import { TeacherContext } from "../../../../context/TeacherContext";

const StudentApplyPopup = ({ onClose }) => {
  const { selectedAfterSchoolId } = useContext(TeacherContext);

  const [form, setForm] = useState({
    name: "",
    studentId: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.studentId || !form.phone) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/ApplyAfterSchool.jsp",
        null, // 바디는 없음
        {
          params: {
            afterschool_id: selectedAfterSchoolId,
            name: form.name,
            studentId: form.studentId,
            phone: form.phone,
          },
        }
      );

      if (res.data.result === "success") {
        alert("신청이 완료되었습니다!");
        onClose();
      } else {
        alert("신청에 실패했습니다.");
      }
    } catch (err) {
      console.error(err);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <div className="StudentApplyPopupOverlay">
      <div className="StudentApplyPopup">
        <h2>신청서 작성</h2>
        <div className="popup-content">
          <label>
            이름
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
            />
          </label>
          <label>
            학번
            <input
              type="text"
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              placeholder="학번을 입력하세요"
            />
          </label>
          <label>
            전화번호
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="전화번호를 입력하세요"
            />
          </label>
        </div>

        <div className="popup-buttons">
          <button onClick={onClose} className="close-btn">
            닫기
          </button>
          <button onClick={handleSubmit} className="submit-btn">
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentApplyPopup;
