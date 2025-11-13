import "./AddMain.css"
import Additem from "../AddItem/AddItem"
import Add from "../Add/Add"


const AddMain = () => {
    return(
        <div className="AddMain">
            <div className="AddMainTitle">
                <h3>방과후 정보</h3>
                <h3>담당교사</h3>
                <h3>수업시간</h3>
                <h3>정원</h3>
                <h3>상태</h3>
                <h3>관리</h3>
            </div>
            <div className="ItemWrapper">
                <Additem />
            </div>
        </div>
    )
}

export default AddMain