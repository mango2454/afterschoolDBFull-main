import { useContext } from "react";
import "./RegisterListHead.css"
import { TeacherContext } from "../../../../context/TeacherContext";


const RegisterListHead = ({title}) => {

    const {setActiveTab} = useContext(TeacherContext)



    return (
      <div className="RegisterListHead">
        <div>
          <h1>{title}</h1>
        </div>

        <div className="RegisterListHeadBtn">
          <button onClick={() => setActiveTab('firstpage')}>수강중인 방과후</button>
          <button onClick={() => setActiveTab('twopage')}>신청내역</button>
        </div>
      </div>
    );
}

export default RegisterListHead