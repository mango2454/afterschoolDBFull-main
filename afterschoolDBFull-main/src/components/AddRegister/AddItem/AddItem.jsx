import "./AddItem.css"
import { useContext } from "react"
import { TeacherContext } from "../../../context/TeacherContext"



const Additem = () => {

    const {mockData, mode, setMode, setActive} = useContext(TeacherContext)

    return(
        <div>
        {mockData.map((item) => (
            <div className="AddItem" key={item.id}>
            <div className="AddItenTitle">
                <h2>{item.title}</h2>
                <h3>{item.grade}{item.class}</h3>
                <h4>{item.price}</h4>
            </div>
            <div className="AddItemTeacher">
                <h2>{item.teacher}</h2>
            </div>
            <div className="AddItemTime">
                {item.time}
            </div>
            <div className="AddItemLimit">
                {item.limit}
            </div>
            <div className="AddItemState">
                {item.state}
            </div>
            <div className="AddItemManage" >
                <button onClick={() => setMode("detail")}>보기</button>
                <button onClick={() => setActive(2)}>수정</button>
                <button>삭제</button>
            </div>
        </div>
        ))}
        </div>


    )
}

export default Additem