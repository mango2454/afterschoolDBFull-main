import "./RegisterItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const RegisterItem = ({ fetchRegisterData }) => {
  const [registerData, setRegisterData] = useState([]);

  // 신청 목록 가져오기
  useEffect(() => {
    fetchRegister();
  }, []);

  const fetchRegister = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8083/afterschool_(1)/GetRegisterList.jsp"
      );
      setRegisterData(res.data);
      if (fetchRegisterData) fetchRegisterData(); // 상위 컴포넌트 갱신
    } catch (err) {
      console.error("신청 내역 조회 실패:", err);
    }
  };

  // 승인 처리
  const handleApprove = async (apply_id) => {
    try {
      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/approveApply.jsp",
        new URLSearchParams({ apply_id })
      );

      if (res.data.trim() === "success") {
        alert("승인되었습니다.");
        setRegisterData((prev) =>
          prev.filter((item) => item.apply_id !== apply_id)
        );
        if (fetchRegisterData) fetchRegisterData();
      } else if (res.data.trim() === "notfound") {
        alert("해당 신청이 존재하지 않습니다.");
      } else {
        alert("승인 실패");
      }
    } catch (err) {
      console.error("승인 오류:", err);
      alert("서버 오류");
    }
  };

  // 거절 처리
const handleReject = async (apply_id) => {
  if (!window.confirm("정말 거절하시겠습니까?")) return;

  try {
    const res = await axios.post(
      "http://localhost:8083/afterschool_(1)/rejectApply.jsp",
      new URLSearchParams({ apply_id }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const text = res.data.trim();

    if (text === "success") {
      alert("거절되었습니다.");
      setRegisterData((prev) =>
        prev.filter((item) => item.apply_id !== apply_id)
      );
      if (fetchRegisterData) fetchRegisterData(); // 상위 갱신
    } else if (text === "notfound") {
      alert("해당 신청이 존재하지 않습니다.");
    } else {
      alert("거절 실패");
    }
  } catch (err) {
    console.error("거절 오류:", err);
    alert("서버 오류");
  }
};

  return (
    <div>
      {registerData.length === 0 && <p>신청한 학생이 없습니다.</p>}
      {registerData.map((item) => (
        <div className="RegisterItem" key={item.apply_id}>
          <div className="RegisterItemBox1">
            <h3>{item.user_name}</h3>
            <h4>{item.student_id}</h4>
          </div>
          <div>
            <h3>{item.reigisterProgram}</h3>
          </div>
          <div>
            <h3>{item.phone}</h3>
          </div>
          <div>
            <h3>{item.register_state}</h3>
          </div>
          <div className="RegisterItemBtn">
            <button onClick={() => handleApprove(item.apply_id)}>승인</button>
            <button onClick={() => handleReject(item.apply_id)}>거절</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegisterItem;
