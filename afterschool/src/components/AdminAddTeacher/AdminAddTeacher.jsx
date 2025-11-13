import { useState } from "react";
import AdminTeacherHead from "./AdminTeacherHead/AdminTeacherHead";
import AdminTeacherNav from "./AdminTeacherNav/AdminTeacherNav";
import AdminTeacherMain from "./AdminTehacerMain/AdminTeacherMain";

const AdminAddTeacher = () => {
  // 🔍 검색 상태
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <AdminTeacherHead />
      <AdminTeacherNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AdminTeacherMain searchTerm={searchTerm} />
    </div>
  );
};

export default AdminAddTeacher;
