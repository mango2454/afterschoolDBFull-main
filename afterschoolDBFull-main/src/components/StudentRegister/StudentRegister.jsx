import StudentRegisterHead from "./StudentRegisterHead/StudentRegisterHead"
import StudentRegisterNav from "./StudenrRegisterNav/StudentRegisterNav"
import StudentRegisterMain from "./StudentRegisterMain/StudentRegisterMain"
import StudentRegisterImpormation from "./StudentRegisterImpormation/StudentRegisterImpormation"
import { useContext } from "react"
import { TeacherContext } from "../../context/TeacherContext"


const StudentRegister = () => {
    const {studentRegister} = useContext(TeacherContext)
    return (
      <div>
        {studentRegister === "student" && (
          <div>
            <StudentRegisterHead />
            <StudentRegisterNav />
            <StudentRegisterMain />
          </div>
        )}

        {studentRegister === 'register' &&(
           <StudentRegisterImpormation />
        )}
      </div>
    );
}

export default StudentRegister