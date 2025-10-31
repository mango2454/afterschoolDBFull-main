import { useContext } from "react"
import { TeacherContext } from "../../../context/TeacherContext"

import "./RegisterSituationItem.css"

const RegisterSituationItem = () => {

    const {RegisterSituationData} = useContext(TeacherContext);

    return (
      <div>
        {RegisterSituationData.map((item) => (
          <div className="RegisterSituationItem" key={item.id}>
            <div>{item.title}</div>
            <div>{item.sumRegister}</div>
            <div>{item.check}</div>
            <div>{item.not}</div>
            <div>{item.state}</div>
          </div>
        ))}
      </div>
    );
}

export default RegisterSituationItem