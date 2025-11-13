import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";
import axios from "axios";


const StudnetRegisterImportmationMain = () => {
  const { selectedAfterSchoolId } = useContext(TeacherContext);

  const [rawData, setRawData] = useState(null);
  const [displayData, setDisplayData] = useState({
    afterschool_description: "",
    afterschool_material: "",
    afterschool_room: "",
    afterschool_teacher: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedAfterSchoolId) return;

    let isMounted = true;
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8083/afterschool_(1)/GetAfterSchool.jsp?id=${selectedAfterSchoolId}`
        );
        if (isMounted && res.data.length > 0) {
          setRawData(res.data[0]);
          setDisplayData({
            afterschool_description: res.data[0].afterschool_description || "",
            afterschool_material: res.data[0].afterschool_material || "",
            afterschool_room: res.data[0].afterschool_room || "",
            afterschool_teacher: res.data[0].afterschool_teacher || ""
          });
        }
      } catch (err) {
        if (isMounted) console.error("데이터 로딩 실패:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [selectedAfterSchoolId]);

  if (loading) return <div>로딩중...</div>;

  return (
    <div className="ImpormationMain">
      <div className="ImpormationMainTitle">
        <h2>상세정보</h2>
      </div>
      <div className="ImpormationContent">
        <h2>방과후 설명</h2>
        <h3>{displayData.afterschool_description}</h3>
      </div>
      <div className="ImpormationContent">
        <h2>준비물</h2>
        <h3>{displayData.afterschool_material}</h3>
      </div>
      <div className="ImpormationContent">
        <h2>수강장소</h2>
        <h3>{displayData.afterschool_room}</h3>
      </div>
      <div className="ImpormationContent">
        <h2>담당선생님</h2>
        <h3>{displayData.afterschool_teacher}</h3>
      </div>
    </div>
  );
};

export default StudnetRegisterImportmationMain;
