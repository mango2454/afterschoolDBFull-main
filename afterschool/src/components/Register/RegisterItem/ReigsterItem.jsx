import "./RegisterItem.css"


import { useContext } from "react"
import { TeacherContext } from "../../../context/TeacherContext"


const RegisterItem = () => {

    const {RegisterData} = useContext(TeacherContext);

    return (
      <div>
        {RegisterData.map((item) => (
          <div className="RegisterItem" key={item.id}>
            <div className="RegisterItemBox1">
              <h3>{item.name}</h3>
              <h4>{item.studentNumber}</h4>
            </div>
            <div>
              <h3>{item.reigisterProgram}</h3>
            </div>
            <div>
              <h3>{item.registerDate}</h3>
            </div>
            <div>
              <h3>{item.state}</h3>
            </div>

            <div className="RegisterItemBtn">
              <button>승인</button>
              <button>거절</button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default RegisterItem