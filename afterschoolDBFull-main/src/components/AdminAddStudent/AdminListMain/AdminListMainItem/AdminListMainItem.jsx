import { useEffect, useState } from "react";
import "./AdminListMainItem.css";

const AdminListMainItem = () => {
  const [users, setUsers] = useState([]);

  // JSP에서 데이터 불러오기
  useEffect(() => {
    fetch("http://localhost:8083/afterschool/getUserList.jsp") // 🔹 JSP 경로 수정
      .then((response) => response.json())
      .then((data) => {
        console.log("불러온 데이터:", data);
        setUsers(data);
      })
      .catch((error) => console.error("데이터 불러오기 실패:", error));
  }, []);

  return (
    <>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div className="AdminListMainItem" key={index}>
            <h3>{user.user_name}</h3>
            <h3>{user.user_phone}</h3>
            <div className="AdminListMainItemBtn">
              <button>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <p>학생 정보가 없습니다.</p>
      )}
    </>
  );
};

export default AdminListMainItem;
