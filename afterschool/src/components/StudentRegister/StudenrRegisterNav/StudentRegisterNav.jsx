import "./StudentRegisterNav.css"

const StudentRegisterNav = () => {
    return (
      <div className="StudentRegisterNav">
        <h2 className="main-title">방과후 신청</h2>
        <div className="search-box">
          <input type="text" placeholder="방과후를 선택하세요" />
        </div>
      </div>
    );
}

export default StudentRegisterNav