import { useContext } from "react"
import { TeacherContext } from "../../context/TeacherContext"

import RegisterList from "./RegisterList/RegisterList"
import RegisterSituation from "./RegisterSituation/RegisterSituation"


const RegisterTab = [
    {name:"신청관리", components: <RegisterList />},
    {name:"신청현황", components: <RegisterSituation />}
]


const Register = () => {

    const {registerActive, setRegisterActive} = useContext(TeacherContext);

    return(
        <div>
            {RegisterTab[registerActive].components}
        </div>
    )
}

export default Register