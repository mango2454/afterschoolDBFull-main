import "./StudentRegisterBoxItem.css";

const StudentRegisterBoxItem = () => {
    return (
      <div className="StudentRegisterBoxItem">
        <h3>웹디자인</h3>
        <h3>신청완료</h3>
        <h3>대기중</h3>
        <div className="StudentRegisterBoxItemBtn">
          <button>신청취소</button>
        </div>
      </div>
    );
}

export default StudentRegisterBoxItem;