import "./StudentRegisterBox.css"

import StudentRegisterBoxItem from "./StudentRegisterBoxItem/StudentRegisterBoxItem";

const StudentRegisterBox = () => {
    return (
      <div className="StudentRegisterBox">
        <div className="StudentRegisterBoxTitle">
          <ul>
            <li>방과후</li>
            <li>상태</li>
            <li>승인</li>
            <li>신청취소</li>
          </ul>
        </div>

        <div className="StudentRegisterBoxWrapper">
            <StudentRegisterBoxItem />
        </div>
      </div>
    );
}
export default StudentRegisterBox