import { useEffect, useState } from "react";
import "./AdminListMainItem.css";

const AdminListMainItem = ({ searchTerm }) => {
  const [students, setStudents] = useState([]);

  // 학생 데이터 가져오기
  useEffect(() => {
    fetch("http://localhost:8083/afterschool_(1)/getUserList.jsp")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((user) => user.user_identy === "student");
        setStudents(filtered);
      })
      .catch((err) => console.error("데이터 불러오기 실패:", err));
  }, []);

  // 🔍 검색 필터링
  const filteredStudents = students.filter((user) => {
    if (!searchTerm) return true;
    return user.user_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // 삭제
  const handleDelete = async (user_id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      const res = await fetch(
        `http://localhost:8083/afterschool_(1)/deleteUser.jsp?id=${user_id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      const result = await res.json();
      if (result.success) {
        setStudents((prev) => prev.filter((s) => s.user_id !== user_id));
        alert("삭제되었습니다.");
      } else {
        alert("삭제 실패: " + result.message);
      }
    } catch (err) {
      console.error("삭제 실패:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      {filteredStudents.length > 0 ? (
        filteredStudents.map((user) => (
          <div className="AdminListMainItem" key={user.user_id}>
            <h3>{user.user_name}</h3>
            <h3>{user.user_phone}</h3>
            <div className="AdminListMainItemBtn">
              <button onClick={() => handleDelete(user.user_id)}>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </>
  );
};

export default AdminListMainItem;
