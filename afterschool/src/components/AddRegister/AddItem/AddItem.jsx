import "./AddItem.css";
import { useContext, useState, useEffect } from "react";
import { TeacherContext } from "../../../context/TeacherContext";
import axios from "axios";

const Additem = () => {
  const { setMode, setSelectedAfterSchoolId, searchTerm } = useContext(TeacherContext);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8083/afterschool_(1)/GetAfterSchool.jsp"
      );
      // JSP에서 JSON이 올 때 배열로 들어온다고 가정
      setItems(res.data || []);
    } catch (err) {
      console.error("데이터 가져오기 실패:", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      const formData = new URLSearchParams();
      formData.append("afterschool_id", id);

      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/DeleteAfterSchool.jsp",
        formData.toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (res.data.trim() === "success") {
        alert("삭제 완료!");
        fetchItems();
      } else {
        alert("삭제 실패!");
      }
    } catch (err) {
      console.error("삭제 오류:", err);
    }
  };

  // 🔹 검색어 필터링 (검색어 없으면 전체 출력)
  const filteredItems = items.filter((item) => {
    if (!searchTerm) return true; // 검색어 없으면 전체
    return item.afterschool_title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {filteredItems.length === 0 ? (
        <div className="AddItemEmpty">검색 결과가 없습니다.</div>
      ) : (
        filteredItems.map((item) => (
          <div className="AddItem" key={item.afterschool_id}>
            <div className="AddItemTitle">
              <h2>{item.afterschool_title}</h2>
              <h3>{item.afterschool_grade}</h3>
              <h4>{item.afterschool_money}</h4>
            </div>

            <div className="AddItemTeacher">
              <h2>{item.afterschool_teacher}</h2>
            </div>

            <div className="AddItemTime">{item.afterschool_schedule}</div>
            <div className="AddItemLimit">{item.afterschool_max}</div>
            <div className="AddItemState">{item.afterschool_status}</div>

            <div className="AddItemManage">
              <button
                onClick={() => {
                  setSelectedAfterSchoolId(item.afterschool_id);
                  setMode("detail");
                }}
              >
                보기
              </button>
              <button onClick={() => handleDelete(item.afterschool_id)}>삭제</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Additem;
