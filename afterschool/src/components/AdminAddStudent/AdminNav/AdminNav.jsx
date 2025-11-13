import "./AdminNav.css";

const AdminNav = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="AdminNav">
      <div className="AdminNavTitle">
        <h3>검색</h3>
      </div>
      <div className="AdminNavInput">
        <input
          type="text"
          placeholder="학생이름을 입력해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // ✅ 입력 시 검색어 업데이트
        />
      </div>
    </div>
  );
};

export default AdminNav;
