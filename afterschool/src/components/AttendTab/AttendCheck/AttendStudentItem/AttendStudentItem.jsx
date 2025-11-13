import { useContext } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";

import "./AttendStudentItem.css"

const AttendStudentItem = () => {

    const { RegisterData, setPopup, setListPopup } = useContext(TeacherContext);

  return (
    <div>
      {RegisterData.map((item) => (
        <div className="AttendStudentItem">
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <h3>{item.studentNumber}</h3>
          </div>
          <div>
            <h3>{item.AttendCheck}</h3>
          </div>
          <div>
            <h3>{item.reason}</h3>
          </div>
          <div className="AttendStudentItemBtn">
            <button onClick={() => setListPopup(true)}>통계</button>
            <button onClick={() => setPopup(true)}>수정</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendStudentItem;
