import "./AttendStudentNav.css"

const AttendStudentNav = () => {
    return (
      <div className="AttendStudentNav">
        <div className="AttendStudentNavTitle">
          <h1>UI구현</h1>
        </div>
        <div className="AttendStudentNavContent">
          <h3>날짜선택</h3>
          <input type="date" />
        </div>
      </div>
    );
}

export default AttendStudentNav