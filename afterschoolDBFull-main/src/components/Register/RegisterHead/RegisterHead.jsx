import "./RegisterHead.css"
import { useContext } from "react"
import { TeacherContext } from "../../../context/TeacherContext"

const RegisterHead = ({title}) => {

    const {setRegisterActive} = useContext(TeacherContext);

    return (
      <div className="RegisterHead">
        <div className="RegisterHeadTitle">
          <h2>{title}</h2>
        </div>
        <div className="RegisterHeadBtn">
          <button onClick={() => setRegisterActive(0)}>신청관리</button>
          <button onClick={() => setRegisterActive(1)}>신청현황</button>
        </div>
      </div>
    );
}
export default RegisterHead