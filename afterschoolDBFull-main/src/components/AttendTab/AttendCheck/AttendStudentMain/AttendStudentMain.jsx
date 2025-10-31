
import AttendStudentItem from "../AttendStudentItem/AttendStudentItem"
import AttendListPopup from "../AttendlIstPopup/AttendListPopup";


import "./AttendStudentMain.css"




const AttendStudentMain = () => {



    return (
      <div className="AttendStudentMain">
        <div className="AttendStudentMainTitle">
          <ul>
            <li>학생정보</li>
            <li> 학번</li>
            <li> 출석상태</li>
            <li>사유</li>
            <li>관리</li>
          </ul>
        </div>
        <div className="AttendStudentMainWrapper">
          <AttendStudentItem />
        </div>
      </div>
    );
}

export default AttendStudentMain