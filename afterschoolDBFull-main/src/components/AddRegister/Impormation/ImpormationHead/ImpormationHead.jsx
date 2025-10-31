import { use } from "react"
import "./ImpormationHead.css"
import { useContext } from "react"
import { TeacherContext } from "../../../../context/TeacherContext"


const ImpormationHead = () => {

    const {mode, setMode} = useContext(TeacherContext);


    return(
        <div className="ImpormationHead">
            <div className="ImpormationHeadTitle">
                <h2>상세페이지</h2>
            </div>
            <div className="ImpormationHeadBtn">
                <button onClick={() => setMode("nomal")}>목록으로 돌아가기</button>
                <button>삭제하기</button>
            </div>
        </div>
    )
}

export default ImpormationHead