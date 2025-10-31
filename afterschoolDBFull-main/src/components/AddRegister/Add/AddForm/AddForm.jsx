import { useState } from "react";
import { useEffect } from "react";
import "./AddForm.css";

const AddForm = () => {
  const [form, setForm] = useState({
    register: "", // 방과후 이름
    targetStudents: "", // 수강대상
    teacher: "", // 담당교사
    money: "", // 수강료
    dateAndTime: "", // 수업 요일과 시간
    location: "", // 장소
    maxPeople: "", // 최대정원
    programTerm: "", // 운영기간
    registerDetail: "", // 방과후 설명
    material: "", // 준비물
  });

  const [status, setStatus] = useState(""); // 모집중 / 마감 상태

  // 모든 입력의 onChange를 처리하는 하나의 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form)
  };

  // 등록 버튼 클릭 시
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("등록할 데이터:", { ...form, status });
    // 👉 나중에 여기서 DB로 form 데이터 전송
  };

    // useEffect(() => {
    //   console.log("현재 입력된 값:", form);
    // }, [form]);

  return (
    <div className="AddForm">
      {/* 1행 */}
      <div className="AddFormRow">
        <div>
          <label>방과후</label>
          <input
            type="text"
            name="register"
            onChange={handleChange}
            value={form.register}
          />
        </div>
        <div>
          <label>수강대상</label>
          <input
            type="text"
            value={form.targetStudents}
            name="targetStudents"
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
            value={form.teacher}
            name="teacher"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>수강료</label>
          <input
            type="text"
            value={form.money}
            name="money"
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
            name="dateAndTime"
            placeholder="ex) 월,수,목 17:00~21:00"
            onChange={handleChange}
            value={form.dateAndTime}
          />
        </div>
        <div>
          <label>장소</label>
          <input
            type="text"
            name="location"
            placeholder="ex) 406호"
            onChange={handleChange}
            value={form.location}
          />
        </div>
      </div>

      {/* 4행 */}
      <div className="AddFormRow">
        <div>
          <label>최대정원</label>
          <input
            type="text"
            value={form.maxPeople}
            name="maxPeople"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>운영기간</label>
          <input
            type="text"
            name="programTerm"
            placeholder="ex) 2주"
            onChange={handleChange}
            value={form.programTerm}
          />
        </div>
      </div>

      {/* 5행: 설명 */}
      <div className="AddFormRowFull">
        <label>방과후 설명</label>
        <textarea
          name="registerDetail"
          value={form.registerDetail}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* 6행: 준비물 */}
      <div className="AddFormRowFull">
        <label>준비물</label>
        <textarea
          name="material"
          value={form.material}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* 모집 상태 버튼 */}
      <div className="AddFormStateButtons">
        <button
          type="button"
          className={`recruit ${status === "recruit" ? "active" : ""}`}
          onClick={() => setStatus("recruit")}
        >
          모집중
        </button>
        <button
          type="button"
          className={`end ${status === "end" ? "active" : ""}`}
          onClick={() => setStatus("end")}
        >
          마감
        </button>
      </div>

      {/* 등록 버튼 */}
      <div className="AddFormSubmit">
        <button type="submit">등록하기</button>
      </div>
    </div>
  );
};

export default AddForm;
