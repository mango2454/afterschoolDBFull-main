import { useContext } from "react";
import { TeacherContext } from "../../../../context/TeacherContext";
import "./AdminTeacherListMainItem.css"

const AdminTeacherListMainItem = () => {
  const { adminTeacherData } = useContext(TeacherContext);

  return (
    <div>
      {adminTeacherData.map((item) => (
        <div className="AdminTeacherListMainItem" key={item.id}>
          <h3>{item.name}</h3>
          <h3>{item.phone}</h3>

          <div className="AdminTeacherListMainItemBtn">
            <button>거절</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminTeacherListMainItem;