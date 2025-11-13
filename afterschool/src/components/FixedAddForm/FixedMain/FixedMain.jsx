import { useContext, useEffect, useState } from "react";
import "./FixedMain.css";
import axios from "axios";
import { TeacherContext } from "../../../context/TeacherContext";

const FixedMain = () => {
  const { setChange, selectedAfterSchoolId } = useContext(TeacherContext);
  const [formData, setFormData] = useState({
    afterschool_title: "",
    afterschool_grade: "",
    afterschool_teacher: "",
    afterschool_money: "",
    afterschool_schedule: "",
    afterschool_room: "",
    afterschool_max: "",
    afterschool_week: "",
    afterschool_description: "",
    afterschool_material: "",
    afterschool_status: "모집중",
  });

  // 🔹 기존 데이터 불러오기
  useEffect(() => {
    if (!selectedAfterSchoolId) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8083/afterschool_(1)/GetAfterSchool.jsp?id=${selectedAfterSchoolId}`
        );
        if (res.data && res.data.length > 0) {
          setFormData(res.data[0]);
        }
      } catch (err) {
        console.error("방과후 데이터 불러오기 실패:", err);
      }
    };
    fetchData();
  }, [selectedAfterSchoolId]);

  // 🔹 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 수정 요청
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAfterSchoolId) return;

    try {
      const formBody = new URLSearchParams({
        ...formData,
        id: selectedAfterSchoolId, // ✅ 숫자 id 전송
      }).toString();

      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/UpdateAfterSchool.jsp",
        formBody,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (res.data.trim() === "success") {
        alert("수정 완료!");
        setChange(true);
      } else {
        alert("수정 실패!");
      }
    } catch (err) {
      console.error("수정 오류:", err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="AddForm">
        {/* 1행 */}
        <div className="AddFormRow">
          <div>
            <label>방과후</label>
            <input
              type="text"
              name="afterschool_title"
              value={formData.afterschool_title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>수강대상</label>
            <input
              type="text"
              name="afterschool_grade"
              value={formData.afterschool_grade}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 2행 */}
        <div className="AddFormRow">
          <div>
            <label>담당교사</label>
            <input
              type="text"
              name="afterschool_teacher"
              value={formData.afterschool_teacher}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>수강료</label>
            <input
              type="text"
              name="afterschool_money"
              value={formData.afterschool_money}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 3행 */}
        <div className="AddFormRow">
          <div>
            <label>수업요일과 수업시간</label>
            <input
              type="text"
              name="afterschool_schedule"
              value={formData.afterschool_schedule}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>장소</label>
            <input
              type="text"
              name="afterschool_room"
              value={formData.afterschool_room}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 4행 */}
        <div className="AddFormRow">
          <div>
            <label>최대정원</label>
            <input
              type="text"
              name="afterschool_max"
              value={formData.afterschool_max}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>운영기간</label>
            <input
              type="text"
              name="afterschool_week"
              value={formData.afterschool_week}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 5행: 설명 */}
        <div className="AddFormRowFull">
          <label>방과후 설명</label>
          <textarea
            name="afterschool_description"
            value={formData.afterschool_description}
            onChange={handleChange}
          />
        </div>

        {/* 6행: 준비물 */}
        <div className="AddFormRowFull">
          <label>준비물</label>
          <textarea
            name="afterschool_material"
            value={formData.afterschool_material}
            onChange={handleChange}
          />
        </div>

        {/* 상태 버튼 */}
        <div className="AddFormStateButtons">
          <button
            type="button"
            className={`recruit ${formData.afterschool_status === "모집중" ? "active" : ""}`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, afterschool_status: "모집중" }))
            }
          >
            모집중
          </button>

          <button
            type="button"
            className={`end ${formData.afterschool_status === "마감" ? "active" : ""}`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, afterschool_status: "마감" }))
            }
          >
            마감
          </button>
        </div>

        {/* 등록 버튼 */}
        <div className="AddFormSubmit">
          <button type="button" onClick={() => setChange(true)}>
            뒤로가기
          </button>
          <button type="submit">수정하기</button>
        </div>
      </div>
    </form>
  );
};

export default FixedMain;
