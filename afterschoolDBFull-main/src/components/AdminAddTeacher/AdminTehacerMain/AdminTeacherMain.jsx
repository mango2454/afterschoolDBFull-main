
import "./AdminTeacherMain.css"
import AdminTeacherListMainItem from "./AdminTeacherListMainItem/AdminTeacherListMainItem";


const AdminTeacherMain = () => {

    return (
      <div className="AdminTeacherMain">
        <div className="AdminTeacherMainTitle">
          <ul>
            <li>선생님정보</li>
            <li>전화번호</li>
            <li>처리</li>
          </ul>
        </div>

        <div className="AdminTeacherMainWrapper">
          <AdminTeacherListMainItem />
        </div>
      </div>
    );
}

export default AdminTeacherMain;