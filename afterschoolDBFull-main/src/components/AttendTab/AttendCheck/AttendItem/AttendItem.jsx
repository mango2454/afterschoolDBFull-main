import { useContext } from "react"
import { TeacherContext } from "../../../../context/TeacherContext"

import "./AttendItem.css"

const AttendItem = () => {

    const { mockData, setAttendActive } = useContext(TeacherContext);


    return (
      <div>
        {mockData.map((item) => (
          <div className="AttendItem">
            <div>
              <h3>{item.title}</h3>
            </div>
            <div>
              <h3>{item.teacher}</h3>
            </div>
            <div>
              <h3>{item.time}</h3>
            </div>
            <div>
              <h3>{item.limit}</h3>
            </div>
            <div className="AttendItemBtn">
              <button onClick={() => setAttendActive("student")}>
                인원보기
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default AttendItem