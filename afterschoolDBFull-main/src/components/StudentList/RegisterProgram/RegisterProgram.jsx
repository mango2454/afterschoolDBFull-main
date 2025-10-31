import { useContext } from "react"
import RegisterListHead from "../StudentRegister/RegisterListHead/RegisterListHead"
import RegisterProgramBox from "./RegisterProgramBox/RegisterProgramBox"
import { TeacherContext } from "../../../context/TeacherContext"
import RegisterProgramPopup from "./RegisterProgramPopup/RegisterProgramPopup"
const RegisterProgram = () => {

    const {programPopup} = useContext(TeacherContext)
    return (
      <div>
        <RegisterListHead title="수강중인방과후" />
        <RegisterProgramBox />
        {programPopup && <RegisterProgramPopup />}
      </div>
    );
}

export default RegisterProgram