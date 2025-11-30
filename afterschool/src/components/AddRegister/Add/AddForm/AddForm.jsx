import { useState } from "react";
import axios from "axios";
import "./AddForm.css";

const AddForm = () => {
  const [form, setForm] = useState({
    afterschool_title: "", 
    afterschool_grade: "", 
    afterschool_teacher: "", 
    afterschool_money: "", 
    afterschool_schedule: "", 
    afterschool_room: "", 
    afterschool_max: "", 
    afterschool_week: "", 
    afterschool_description: "", 
    afterschool_material: ""
  });

  const [status, setStatus] = useState(""); // 모집중 / 마감 상태

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      formData.append("afterschool_status", status);

      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/AddAfterSchool.jsp",
        formData.toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (res.data.trim() === "success") {
        alert("방과후 등록 성공!");
        // 초기화
        setForm({
          afterschool_title: "",
          afterschool_grade: "",
          afterschool_teacher: "",
          afterschool_money: "",
          afterschool_schedule: "",
          afterschool_room: "",
          afterschool_max: "",
          afterschool_week: "",
          afterschool_description: "",
          afterschool_material: ""
        });
        setStatus("");
      } else if(res.data.trim() === "duplicate") {
        alert("이미 존재하는 방과후 이름입니다!");
      } else {
        alert("등록 실패!");
      }

    } catch (err) {
      console.error(err);
      alert("서버 오류 발생!");
    }
  };

  return (
    <div className="AddForm">
      {/* 1행 */}
      <div className="AddFormRow">
        <div>
          <label>방과후</label>
          <input
            type="text"
            name="afterschool_title"
            onChange={handleChange}
            value={form.afterschool_title}
          />
        </div>
        <div>
          <label>수강대상</label>
          <input
            type="text"
            name="afterschool_grade"
            onChange={handleChange}
            value={form.afterschool_grade}
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
            onChange={handleChange}
            value={form.afterschool_teacher}
          />
        </div>
        <div>
          <label>수강료</label>
          <input
            type="text"
            name="afterschool_money"
            onChange={handleChange}
            value={form.afterschool_money}
          />
        </div>
      </div>

      {/* 3행 */}
      <div className="AddFormRow">
        <div>
          <label>수업요일과 시간</label>
          <input
            type="text"
            name="afterschool_schedule"
            placeholder="ex) 월,수,목 17:00~21:00"
            onChange={handleChange}
            value={form.afterschool_schedule}
          />
        </div>
        <div>
          <label>장소</label>
          <input
            type="text"
            name="afterschool_room"
            placeholder="ex) 406호"
            onChange={handleChange}
            value={form.afterschool_room}
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
            onChange={handleChange}
            placeholder="ex) 20 숫자만입력"
            value={form.afterschool_max}
          />
        </div>
        <div>
          <label>운영기간</label>
          <input
            type="text"
            name="afterschool_week"
            placeholder="ex) 2주"
            onChange={handleChange}
            value={form.afterschool_week}
          />
        </div>
      </div>

      {/* 5행: 설명 */}
      <div className="AddFormRowFull">
        <label>방과후 설명</label>
        <textarea
          name="afterschool_description"
          onChange={handleChange}
          value={form.afterschool_description}
        />
      </div>

      {/* 6행: 준비물 */}
      <div className="AddFormRowFull">
        <label>준비물</label>
        <textarea
          name="afterschool_material"
          onChange={handleChange}
          value={form.afterschool_material}
        />
      </div>

      {/* 모집 상태 버튼 */}
      <div className="AddFormStateButtons">
        <button
          type="button"
          className={`recruit ${status === "모집중" ? "active" : ""}`}
          onClick={() => setStatus("모집중")}
        >
          모집중
        </button>
        <button
          type="button"
          className={`end ${status === "마감" ? "active" : ""}`}
          onClick={() => setStatus("마감")}
        >
          마감
        </button>
      </div>

      {/* 등록 버튼 */}
      <div className="AddFormSubmit">
        <button type="submit" onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default AddForm;
