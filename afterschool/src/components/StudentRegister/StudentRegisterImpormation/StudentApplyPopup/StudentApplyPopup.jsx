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
        null,
        {
          params: {
            afterschool_id: selectedAfterSchoolId,
            name: form.name,
            studentId: form.studentId,
            phone: form.phone,
          },
        }
      );

      const result = res.data.result;

      // ============================
      //   📌 백엔드 반환값 처리
      // ============================
      switch (result) {
        case "success":
          alert("신청이 완료되었습니다!");
          onClose();
          break;

        case "full":
          alert("정원이 모두 찼습니다! 더 이상 신청할 수 없습니다.");
          break;

        case "duplicate":
          alert("이미 신청한 학생입니다!");
          break;

        case "closed":
          alert("이 방과후는 마감되어 신청할 수 없습니다.");
          break;

        case "error":
          alert("서버 오류가 발생했습니다.");
          break;

        default:
          alert("신청에 실패했습니다.");
          break;
      }
    } catch (err) {
      console.error(err);
      alert("서버 통신 오류가 발생했습니다.");
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
