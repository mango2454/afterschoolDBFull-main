import "./AdminNav.css"


const AdminNav = () => {
    return (
      <div className="AdminNav">
        <div className="AdminNavTitle">
          <h3>검색</h3>
        </div>
        <div className="AdminNavInput">
          <input type="text" placeholder="학생이름을 입력해주세요" />
        </div>
      </div>
    );
}

export default AdminNav;