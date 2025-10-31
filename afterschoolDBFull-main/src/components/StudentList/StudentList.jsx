import { useContext } from "react"
import StudentRegister from "./StudentRegister/StudentRegister"
import RegisterProgram from "./RegisterProgram/RegisterProgram"
import { TeacherContext } from "../../context/TeacherContext"

const StudentRegisterList = () => {

    const {activeTab} = useContext(TeacherContext)







    return (
      <div>
        {activeTab === "twopage" && <StudentRegister />}
        {activeTab === "firstpage" && <RegisterProgram />}
      </div>
    );
}
export default StudentRegisterList