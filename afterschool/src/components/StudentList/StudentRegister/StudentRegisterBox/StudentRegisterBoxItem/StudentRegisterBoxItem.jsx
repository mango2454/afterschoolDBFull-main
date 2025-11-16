import "./StudentRegisterBoxItem.css";

const StudentRegisterBoxItem = ({ title, state, apply_id, onCancel }) => {
  const handleCancel = () => {
    console.log("취소 버튼 클릭, apply_id:", apply_id);
    if (window.confirm(`${title} 신청을 취소하시겠습니까?`)) {
      onCancel(apply_id);
    }
  };

  return (
    <div className="StudentRegisterBoxItem">
      <h3>{title}</h3>
      <h3>{state}</h3>
      <div className="StudentRegisterBoxItemBtn">
        <button onClick={handleCancel}>신청취소</button>
      </div>
    </div>
  );
};

export default StudentRegisterBoxItem;
