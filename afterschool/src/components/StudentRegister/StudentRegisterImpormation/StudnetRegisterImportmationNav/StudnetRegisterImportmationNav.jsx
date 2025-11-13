import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";
import axios from "axios";

const StudnetRegisterImportmationNav = () => {
  const { selectedAfterSchoolId } = useContext(TeacherContext);

  const [rawData, setRawData] = useState(null);
  const [displayData, setDisplayData] = useState({
    afterschool_title: "",
    afterschool_schedule: "",
    afterschool_grade: "",
    afterschool_money: "",
    afterschool_week: ""
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
            afterschool_title: res.data[0].afterschool_title || "",
            afterschool_schedule: res.data[0].afterschool_schedule || "",
            afterschool_grade: res.data[0].afterschool_grade || "",
            afterschool_money: res.data[0].afterschool_money || "",
            afterschool_week: res.data[0].afterschool_week || ""
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
    <div className="ImpormationNav">
      <div className="ImpormationNavTitle">
        <h3>{displayData.afterschool_title}</h3>
      </div>
      <div className="ImpormationNavContent">
        <div>
          <h3>수업시간</h3>
          <h4>{displayData.afterschool_schedule}</h4>
        </div>
        <div>
          <h3>수강대상</h3>
          <h4>{displayData.afterschool_grade}</h4>
        </div>
        <div>
          <h3>수강료</h3>
          <h4>{displayData.afterschool_money}</h4>
        </div>
        <div>
          <h3>기간</h3>
          <h4>{displayData.afterschool_week}</h4>
        </div>
      </div>
    </div>
  );
};

export default StudnetRegisterImportmationNav;
