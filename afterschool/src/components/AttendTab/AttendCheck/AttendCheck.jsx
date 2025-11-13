import AttendHead from "../AttendHead/AttendHead"
import AttendNav from "./AttendNav/AttendNav";
import AttendMain from "./AttendMain/AttendMain";
import AttendStudentNav from "./AttendStudentNav/AttendStudentNav";
import AttendStudentMain from "./AttendStudentMain/AttendStudentMain";
import AttendListPopup from "./AttendlIstPopup/AttendListPopup";


import { useContext } from "react";
import { TeacherContext } from "../../../context/TeacherContext";
import AttendPopUp from "./AttendPopUp/AttendPopUp";

const AttendCheck = () => {

    const {attendActive, listPopup, popup} = useContext(TeacherContext)

    return (
      <div>
        <AttendHead title="출석체크" />
        {attendActive === "student" ? <AttendStudentNav /> : <AttendNav />}
        {attendActive === "student" ? <AttendStudentMain /> : <AttendMain />}
        {listPopup && <AttendListPopup  />}
        {popup && <AttendPopUp />}
      </div>
    );
}

export default AttendCheck