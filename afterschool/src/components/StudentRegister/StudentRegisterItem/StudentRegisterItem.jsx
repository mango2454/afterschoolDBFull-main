import "./StudentRegisterItem.css";
import { useContext, useState, useEffect } from "react";
import { TeacherContext } from "../../../context/TeacherContext";
import axios from "axios";

const StudentRegisterItem = () => {
  const { setStudentRegister, setSelectedAfterSchoolId } = useContext(TeacherContext);
  const [items, setItems] = useState([]); 

  // 서버에서 방과후 데이터 가져오기
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8083/afterschool_(1)/GetAfterSchool.jsp"
        );
        setItems(res.data); 
      } catch (err) {
        console.error("방과후 데이터 로딩 실패:", err);
      }
    };

    fetchItems();
  }, []);

  // 신청하기 버튼 클릭
  const onClickStudentChange = (id) => {
    setSelectedAfterSchoolId(id); // 선택한 수업 ID 세팅
    setStudentRegister('register'); // 페이지 상태 변경
  }

  return (
    <div>
      {items.map((item) => (
        <div className="StudentRegisterItem" key={item.afterschool_id}>
          <div>{item.afterschool_title}</div>
          <div>{item.afterschool_teacher}</div>
          <div>{item.afterschool_schedule}</div>
          <div>{item.afterschool_max}</div>
          <div className="StudentRegisterItemBtn">
            <button onClick={() => onClickStudentChange(item.afterschool_id)}>
              신청하기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentRegisterItem;
