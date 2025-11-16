import "./StudentRegisterBox.css";
import { useEffect, useState } from "react";
import StudentRegisterBoxItem from "./StudentRegisterBoxItem/StudentRegisterBoxItem";

const StudentRegisterBox = () => {
  const [myList, setMyList] = useState([]);

  const login = JSON.parse(localStorage.getItem("login"));
  const phone = login?.phone;

  // 신청내역 불러오기
  const fetchData = async () => {
    if (!phone) return;

    try {
      const res = await fetch(
        `http://localhost:8083/afterschool_(1)/GetMyRegister.jsp?phone=${phone}`
      );

      const data = await res.json();
      console.log("학생 신청 내역:", data);

      // 승인된 항목은 제외
      const pendingList = data.filter(item => item.register_state !== "승인");
      setMyList(pendingList);
    } catch (err) {
      console.error("학생 신청내역 조회 실패:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [phone]);

  // 신청취소
  const cancelApply = async (apply_id) => {
    if (!window.confirm("정말 신청을 취소하시겠습니까?")) return;

    try {
      const params = new URLSearchParams();
      params.append("apply_id", apply_id);

      const res = await fetch(
        "http://localhost:8083/afterschool_(1)/cancelApply.jsp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      const text = await res.text();
      console.log("취소 결과:", text);

      if (text.trim() === "success") {
        alert("신청이 취소되었습니다.");
        // 리스트에서 제거
        setMyList((prev) => prev.filter((item) => item.apply_id !== apply_id));
      } else {
        alert("취소 실패");
      }
    } catch (err) {
      console.error("취소 오류:", err);
      alert("서버 오류");
    }
  };

  return (
    <div className="StudentRegisterBox">
      <div className="StudentRegisterBoxTitle">
        <ul>
          <li>방과후</li>
          <li>상태</li>
          <li>신청취소</li>
        </ul>
      </div>

      <div className="StudentRegisterBoxWrapper">
        {myList.length === 0 ? (
          <p>신청내역이 없습니다.</p>
        ) : (
          myList.map((item, index) => (
            <StudentRegisterBoxItem
              key={index}
              title={item.title}
              state={item.register_state}
              apply_id={item.apply_id}
              onCancel={cancelApply}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentRegisterBox;
