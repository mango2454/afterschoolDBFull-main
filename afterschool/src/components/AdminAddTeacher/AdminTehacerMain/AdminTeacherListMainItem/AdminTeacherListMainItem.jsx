import { useEffect, useState } from "react";
import "./AdminTeacherListMainItem.css";

const AdminTeacherListMainItem = ({ searchTerm }) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/afterschool_(1)/getUserList.jsp")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((user) => user.user_identy === "teacher");
        setTeachers(filtered);
      })
      .catch((error) => console.error("데이터 불러오기 실패:", error));
  }, []);

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
        setTeachers((prev) => prev.filter((t) => t.user_id !== user_id));
        alert("삭제되었습니다.");
      } else {
        alert("삭제 실패: " + result.message);
      }
    } catch (err) {
      console.error("삭제 실패:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 🔍 검색어로 필터링
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.user_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredTeachers.length > 0 ? (
        filteredTeachers.map((teacher) => (
          <div className="AdminTeacherListMainItem" key={teacher.user_id}>
            <h3>{teacher.user_name}</h3>
            <h3>{teacher.user_phone}</h3>
            <div className="AdminTeacherListMainItemBtn">
              <button onClick={() => handleDelete(teacher.user_id)}>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <p>교사 정보가 없습니다.</p>
      )}
    </>
  );
};

export default AdminTeacherListMainItem;
