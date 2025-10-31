import "./RegisterProgramBox.css";

import RegisterProgramItem from "../RegisterProgramItem/RegisterProgramItem";

const RegisterProgramBox = () => {
    return (
      <div className="RegisterProgramBox">
        <div className="RegisterProgramBoxTitle">
          <ul>
            <li>방과후</li>
            <li>강사</li>
            <li>시간</li>
            <li>관리</li>
          </ul>
        </div>
            <RegisterProgramItem />
        <div className="RegisterProgramBoxWrapper">

        </div>
      </div>
    );
}

export default RegisterProgramBox;