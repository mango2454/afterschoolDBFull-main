import { useContext } from "react";
import "./RegisterProgramItem.css"
import { TeacherContext } from "../../../../context/TeacherContext";

const RegisterProgramItem = () => {
    const {setProgramPopup} =useContext(TeacherContext)
    return (
      <div className="RegisterProgramItem">
        <h3>웹디자인</h3>
        <h3>박철수</h3>
        <h3>월,수,목:16:00~18:00</h3>
        <div className="RegisterProgramItemBtn">
          <button onClick={() => setProgramPopup(true)}>보기</button>
          <button>취소</button>
        </div>
      </div>
    );
}

export default RegisterProgramItem;