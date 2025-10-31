import { useContext } from "react";
import "./StudentImpormationHead.css"
import { TeacherContext } from "../../../../context/TeacherContext";


const StudentImpormationHead = () => {

    const {setStudentRegister} = useContext(TeacherContext)

    const onChangeBack = () => {
        setStudentRegister('student')
    }

    return (
      <div className="StudentImpormationHead">
        <h1>상세페이지</h1>
        <div className="StudentImpormationHeadBtn">
          <button onClick={onChangeBack}>목록으로 돌아가기</button>
          <button>신청하기</button>
        </div>
      </div>
    );
}

export default StudentImpormationHead;