import { useContext } from "react";
import "./AttendListPopup.css";
import TeacherAdd from "../../../../pages/TeacherAdd";
import { TeacherContext } from "../../../../context/TeacherContext";

const AttendListPopup = () => {

    const attend = 10; // 출석
    const absent = 5; // 결석
    const excused = 4; // 사유

    const totalAttend = attend + absent + excused;
    const totalAttendExcused = totalAttend - excused;

    const total = (attend / totalAttend) * 100;

    const total2 = total.toFixed(0);

    console.log(total2);

    const { setListPopup } = useContext(TeacherContext);

    return (
      <div className="AttendListPopup">
        <div className="AttendListPopupTitle">
          <h1>박철수의 출석률</h1>
          <h2 onClick={() => setListPopup(false)}>X</h2>
        </div>

        <div className="AttendListContent">
          <div>
            <h3>출석</h3>
            <div>
              <h2>20</h2>
            </div>
          </div>

          <div>
            <h3>결석</h3>
            <div>
              <h2>13</h2>
            </div>
          </div>
        </div>
        <div className="AttendListContent2">
          <div>
            <h3>사유</h3>
            <div>
              <h2>2</h2>
            </div>
          </div>
          <div>
            <h3>출석률</h3>
            <div>
              <h2>{total2}%</h2>
            </div>
          </div>
        </div>
        <div className="AttendListBtn">
          <button>풀기</button>
          <button>금지</button>
        </div>
      </div>
    );
}

export default AttendListPopup