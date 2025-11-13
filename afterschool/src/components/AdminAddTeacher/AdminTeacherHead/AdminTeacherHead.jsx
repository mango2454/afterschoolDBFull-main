import { useContext } from "react";
import "./AdminTeacherHead.css"
import { TeacherContext } from "../../../context/TeacherContext";

const AdminTeacherHead = () => {

    const { addTeacher, setAddTeacher} = useContext(TeacherContext)

    return (
      <div className="AdminTeacherHead">
        <h1>선생님목록</h1>
      </div>
    );
}
export default AdminTeacherHead;