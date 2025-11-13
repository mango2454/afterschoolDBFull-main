import "./StudentRegisterMain.css"

import StudentRegisterItem from "../StudentRegisterItem/StudentRegisterItem";


const StudentRegisterMain = () => {
    return (
        <div className="table">
            <div className="table-header">
                <ul>
                    <li>프로그램</li>
                    <li>담당교사</li>
                    <li>시간</li>
                    <li>신청인원</li>
                    <li>관리</li>
                </ul>
            </div>
        <div className="tableWrapper">
            <StudentRegisterItem />
        </div>
      </div>
    );
}
export default StudentRegisterMain