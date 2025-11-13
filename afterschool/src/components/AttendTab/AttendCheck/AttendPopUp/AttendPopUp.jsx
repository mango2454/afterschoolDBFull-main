import { useContext } from "react"
import { TeacherContext } from "../../../../context/TeacherContext"

import "./AttendPopUp.css"

const AttendPopUp = () => {

    const {setPopup} = useContext(TeacherContext);
    return (
      <div className="AttendPopUp">
        <div className="AttendPopUpTitle">
          <h1>출석정보 수정</h1>
          <h2 onClick={() => setPopup(false)}>X</h2>
        </div>

        <div className="AttendPopUpContent">
          <div className="AttendPopUpContentDiv">
            <ul>
              <li>김철수</li>
              <li>20301</li>
              <li>UI구현</li>
            </ul>
          </div>
          <div className="AttendPopUpContentDate">
            <h3>2025/09/01</h3>
          </div>
        </div>

        <div className="AttendPopUpContent2">
          <h3>출석상태</h3>
          <div>
            <button>출석</button>
            <button>결석</button>
            <button>사유</button>
          </div>
        </div>
        <div className="AttendPopUpContent3">
          <h3>사유</h3>
          <textarea
            className="AttendPopUpInput"
            placeholder="사유를 적어주세요"
          ></textarea>
        </div>
        <div className="AttendPopUpBtn">
          <button>등록하기</button>
        </div>
      </div>
    );
}

export default AttendPopUp