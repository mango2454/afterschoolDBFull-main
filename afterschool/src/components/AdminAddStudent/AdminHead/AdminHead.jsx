import "./AdminHead.css"

import { useContext } from "react";
import { TeacherContext } from "../../../context/TeacherContext";


const AdminHead = () => {
  const { addStudent, setAddStudent } = useContext(TeacherContext);

  return (
    <div className="AdminHead">
      <h1>학생목록</h1>

    </div>
  );
};

export default AdminHead;