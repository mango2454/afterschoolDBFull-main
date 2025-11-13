import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ImpormationMain.css";
import { TeacherContext } from "../../../../context/TeacherContext";
import FixedAddForm from "../../../FixedAddForm/FixedAddForm";

const ImpormationMain = () => {
  const { mode, selectedAfterSchoolId, setChange } = useContext(TeacherContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!selectedAfterSchoolId) return;

    const fetchAfterSchool = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8083/afterschool_(1)/GetAfterSchool.jsp?id=${selectedAfterSchoolId}`
        );
        setData(res.data[0]);
      } catch (err) {
        console.error("데이터 로딩 실패:", err);
      }
    };

    fetchAfterSchool();
  }, [selectedAfterSchoolId]);

  if (mode === "detail") {
    if (!data) return <div>로딩중...</div>;

    return (
      <div className="ImpormationMain">
        <div className="ImpormationMainTitle">
          <h2>상세정보</h2>
        </div>
        <div className="ImpormationContent">
          <h2>방과후 설명</h2>
          <h3>{data.afterschool_description}</h3>
        </div>
        <div className="ImpormationContent">
          <h2>준비물</h2>
          <h3>{data.afterschool_material}</h3>
        </div>
        <div className="ImpormationContent">
          <h2>수강장소</h2>
          <h3>{data.afterschool_room}</h3>
        </div>
        <div className="ImpormationContent">
          <h2>담당선생님</h2>
          <h3>{data.afterschool_teacher}</h3>
        </div>
        <div className="ImportantBtn">
          <button onClick={() => setChange(false)}>수정</button>
        </div>
      </div>
    );
  }
};

export default ImpormationMain;
