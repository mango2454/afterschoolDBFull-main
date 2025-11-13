import { use } from "react"
import "./ImpormationHead.css"
import { useContext } from "react"
import { TeacherContext } from "../../../../context/TeacherContext"


const ImpormationHead = () => {

    const {mode, setMode, change} = useContext(TeacherContext);


    return(
        <div className="ImpormationHead">
            <div className="ImpormationHeadTitle">
                <h2>{change === true ? "상세페이지" : "수정페이지"}</h2>
            </div>
            <div className="ImpormationHeadBtn">
                <button onClick={() => setMode("nomal")}>목록으로 돌아가기</button>
            </div>
        </div>
    )
}

export default ImpormationHead