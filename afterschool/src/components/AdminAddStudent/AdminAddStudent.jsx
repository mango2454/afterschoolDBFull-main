import AdminHead from "./AdminHead/AdminHead";
import AdminNav from "./AdminNav/AdminNav";
import AdminListMain from "./AdminListMain/AdminListMain";
import { useContext, useState } from "react";
import { TeacherContext } from "../../context/TeacherContext";

const AdminAddStudent = () => {
  const { addStudent } = useContext(TeacherContext);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ 검색어 상태 추가

  return (
    <div className="AdminAddStudent">
      <AdminHead />
      <AdminNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* ✅ props 전달 */}
      <AdminListMain searchTerm={searchTerm} /> {/* ✅ props 전달 */}
    </div>
  );
};

export default AdminAddStudent;
