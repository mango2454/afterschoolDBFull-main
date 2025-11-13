import "./RegisterSituationMain.css";

import RegisterSituationItem from "../RegisterStituationItem/RegisterSituationItem";

const RegisterSituationMain = () => {
    return (
      <div className="RegisterSituationMain">
        <div className="RegisterSituationTitle">
          <ul>
            <li>방과후</li>
            <li>전체신청</li>
            <li>승인</li>
            <li>거절</li>
            <li>관리</li>
          </ul>
        </div>
        <div className="RegisterSituationWrapper">
            <RegisterSituationItem />
        </div>
      </div>
    );
}

export default RegisterSituationMain