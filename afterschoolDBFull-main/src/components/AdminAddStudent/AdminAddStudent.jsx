import AdminHead from "./AdminHead/AdminHead"
import AdminNav from "./AdminNav/AdminNav"
import AdminListMain from "./AdminListMain/AdminListMain";
import { useContext } from "react";
import { TeacherContext } from "../../context/TeacherContext";

const AdminAddStudent = () => {
    const {addStudent} = useContext(TeacherContext)
    return <div className="AdminAddStudent">
        <AdminHead />
        <AdminNav />
        <AdminListMain />
    </div>;
}
export default AdminAddStudent

