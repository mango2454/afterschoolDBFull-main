import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";
import axios from "axios";
import "./ImpormationNav.css";

const ImpormationNav = () => {
  const { selectedAfterSchoolId } = useContext(TeacherContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    if (!selectedAfterSchoolId) return;

    let isMounted = true; // 언마운트 체크
    setLoading(true);      // 로딩 시작
    setData(null);         // 이전 데이터 초기화

    const fetchAfterSchool = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8083/afterschool_(1)/GetAfterSchool.jsp?id=${selectedAfterSchoolId}`
        );
        if (isMounted) setData(res.data[0]);
      } catch (err) {
        if (isMounted) console.error("방과후 데이터 로딩 실패:", err);
      } finally {
        if (isMounted) setLoading(false); // 로딩 종료
      }
    };

    fetchAfterSchool();

    return () => {
      isMounted = false; // cleanup
    };
  }, [selectedAfterSchoolId]);

  if (loading) return <div>로딩중...</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <div className="ImpormationNav">
      <div className="ImpormationNavTitle">
        <h3>{data.afterschool_title}</h3>
      </div>
      <div className="ImpormationNavContent">
        <div>
          <h3>수업시간</h3>
          <h4>{data.afterschool_schedule}</h4>
        </div>
        <div>
          <h3>수강대상</h3>
          <h4>{data.afterschool_grade}</h4>
        </div>
        <div>
          <h3>수강료</h3>
          <h4>{data.afterschool_money}</h4>
        </div>
        <div>
          <h3>기간</h3>
          <h4>{data.afterschool_week}</h4>
        </div>
      </div>
    </div>
  );
};

export default ImpormationNav;
