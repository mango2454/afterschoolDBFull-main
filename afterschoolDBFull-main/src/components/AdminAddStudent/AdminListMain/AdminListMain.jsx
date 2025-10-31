import "./AdminListMain.css"

import AdminListMainItem from "./AdminListMainItem/AdminListMainItem";

const AdminListMain = () => {
    return (
      <div className="AdminListMain">
        <div className="AdminListMainTitle">
          <ul>
            <li>학생정보</li>
            <li>전화번호</li>
            <li>처리</li>
          </ul>
        </div>

        <div className="AdminListMainWrapper">
          <AdminListMainItem />
        </div>
      </div>
    );
}

export default AdminListMain;