import "./RegisterSituationItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const RegisterSituationItem = () => {
  const [registerSituationData, setRegisterSituationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8083/afterschool_(1)/GetRegisterSituation.jsp"
        );

        // JSP에서 문자열로 JSON 보내면 파싱
        const data =
          typeof res.data === "string" ? JSON.parse(res.data) : res.data;

        setRegisterSituationData(data);
      } catch (err) {
        console.error("신청현황 조회 실패:", err);
      }
    };

    fetchData();
  }, []);

  if (registerSituationData.length === 0) {
    return <p>신청현황 데이터가 없습니다.</p>;
  }

  return (
    <div>
      {registerSituationData.map((item, index) => (
        <div className="RegisterSituationItem" key={index}>
          <div>{item.title}</div>
          <div>{item.sumRegister}</div>
          <div>{item.check}</div>
          <div>{item.not}</div>
          <div>{item.manage}</div>
        </div>
      ))}
    </div>
  );
};

export default RegisterSituationItem;
