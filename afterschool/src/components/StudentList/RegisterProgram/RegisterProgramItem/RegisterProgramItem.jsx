import { useEffect, useState, useContext } from "react";
import "./RegisterProgramItem.css";
import { TeacherContext } from "../../../../context/TeacherContext";

const RegisterProgramItem = () => {
  const { setProgramPopup } = useContext(TeacherContext);
  const [myPrograms, setMyPrograms] = useState([]);
  const [phone, setPhone] = useState(null);

  // 로그인 정보 불러오기
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    setPhone(login?.phone || null);
  }, []);

  // 승인된 프로그램 불러오기
  useEffect(() => {
    if (!phone) return;

    const fetchMyApprovedPrograms = async () => {
      try {
        const res = await fetch(
          `http://localhost:8083/afterschool_(1)/GetMyApprovedRegister.jsp?phone=${phone}`
        );
        const data = await res.json();
        setMyPrograms(data);
      } catch (err) {
        console.error("승인된 방과후 불러오기 실패:", err);
      }
    };

    fetchMyApprovedPrograms();
  }, [phone]);

  // 취소 버튼 클릭 시
  const handleCancel = async (applyId) => {
    if (!window.confirm("정말 취소하시겠습니까?")) return;

    try {
      const res = await fetch(
        `http://localhost:8083/afterschool_(1)/CancelRegister.jsp?apply_id=${applyId}`,
        { method: "POST" }
      );
      const data = await res.json();

      if (data.success) {
        setMyPrograms((prev) => prev.filter((item) => item.apply_id !== applyId));
        alert("수강 취소 완료");
      } else {
        alert("취소 실패: " + (data.message || "알 수 없는 오류"));
      }
    } catch (err) {
      console.error("취소 실패:", err);
      alert("취소 실패: 네트워크 오류");
    }
  };

  return (
    <div className="RegisterProgramItemContainer">
      {myPrograms.length === 0 ? (
        <p>승인된 방과후가 없습니다.</p>
      ) : (
        myPrograms.map((item) => (
          <div key={item.apply_id} className="RegisterProgramItem">
            <h3>{item.title}</h3>
            <h3>{item.teacher}</h3>
            <h3>{item.schedule}</h3>
            <div className="RegisterProgramItemBtn">
              <button onClick={() => handleCancel(item.apply_id)}>취소</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RegisterProgramItem;
