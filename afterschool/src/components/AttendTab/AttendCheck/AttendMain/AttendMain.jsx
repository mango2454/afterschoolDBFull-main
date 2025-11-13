import AttendItem from "../AttendItem/AttendItem"


import "./AttendMain.css"

const AttendMain = () => {
    return(
        <div className="AttendMain">
            <div className="AttendMainTitle">
                <ul>
                    <li>프로그램</li>
                    <li>담당교사</li>
                    <li>시간</li>
                    <li>신청인원</li>
                    <li>관리</li>
                </ul>
            </div>

            <div className="AttendMainWrapper">
                <AttendItem />
            </div>
        </div>
    )
}

export default AttendMain