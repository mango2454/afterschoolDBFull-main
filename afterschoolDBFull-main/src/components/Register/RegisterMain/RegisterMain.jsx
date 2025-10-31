import "./RegisterMain.css"

import RegisterItem from "../RegisterItem/ReigsterItem"

const RegisterMain = () => {
    return(
        <div className="RegisterMain">
            <div className="RegisterMainTitle">
                    <ul>
                        <li>학생정보</li>
                        <li>신청프로그램</li>
                        <li>신청일</li>
                        <li>상태</li>
                        <li>관리</li>
                    </ul>
            </div>

            <div className="RegisterMainWrapper">
                <RegisterItem />
            </div>
        </div>
    )
}

export default RegisterMain