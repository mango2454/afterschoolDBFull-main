import "./AdminTeacherNav.css"

const AdminTeacherNav = () => {
    return (
      <div className="AdminTeacherNav">
        <div className="AdminTeacherNavTitle">
          <h3>검색</h3>
        </div>
        <div className="AdminTeacherNavInput">
          <input type="text" placeholder="선생님이름을 입력해주세요" />
        </div>
      </div>
    );
}

export default AdminTeacherNav;