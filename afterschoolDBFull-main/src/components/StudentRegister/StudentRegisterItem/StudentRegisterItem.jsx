import "./StudentRegisterItem.css"


import { useContext } from "react"
import { TeacherContext } from "../../../context/TeacherContext"


const StudentRegisterItem = () => {

    const {setStudentRegister} = useContext(TeacherContext)
    const {mockData} = useContext(TeacherContext)

    const onClickStudentChange = () => {
        setStudentRegister('register')
    }

    return (
      <div>
        {mockData.map((item) => (
          <div className="StudentRegisterItem" key={item.id}>
            <div>{item.title}</div>
            <div>{item.teacher}</div>
            <div>{item.time}</div>
            <div>{item.limit}</div>
            <div className="StudentRegisterItemBtn">
              <button onClick={onClickStudentChange}>신청하기</button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default StudentRegisterItem