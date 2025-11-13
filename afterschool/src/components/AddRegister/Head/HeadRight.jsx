import { useContext } from "react";
import { TeacherContext } from "../../../context/TeacherContext";

const HeadRight = () => {
  const { active, setActive } = useContext(TeacherContext);

  return (
    <div className="right">
      <button
        className={`btn1 ${active === 0 ? "active" : ""}`}
        onClick={() => setActive(0)}
      >
        프로그램 목록
      </button>
      <button
        className={`btn2 ${active === 1 ? "active" : ""}`}
        onClick={() => setActive(1)}
      >
        등록하기
      </button>
    </div>
  );
};

export default HeadRight;
