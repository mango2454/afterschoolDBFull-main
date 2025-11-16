import { useContext } from "react"
import "./AttendHead.css"
import { TeacherContext } from "../../../context/TeacherContext"



const AttendHead = ({title}) => {

const { attendActive, setAttendActive} = useContext(TeacherContext)


    return(
        <div className="AttendHead">
            <div className="AttendTitle">
                <h2>{title}</h2>
            </div>
            <div className="AttendBtn">
                <button >출석체크</button>
                {attendActive === "student" ? <button onClick={() => setAttendActive("class")}>돌아가기</button>: null}
            </div>
        </div>
    )
}
export default AttendHead