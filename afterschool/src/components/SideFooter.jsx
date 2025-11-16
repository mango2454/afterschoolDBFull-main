import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../context/TeacherContext";

const SideFooter = () => {
  const { login, setLogin } = useContext(TeacherContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
    setLogin({ id: "", password: "", name: "", phone: "", type: "" });
    localStorage.removeItem("login");
    sessionStorage.removeItem("login");
    navigate("/");
  };

  return (
    <div className="SideFooter" style={{ textAlign: "center", padding: "10px", fontSize: "12px", color: "#888" }}>
      {login && login.id ? (
        <div>
          <span>{login.name} ({login.type})</span>
          <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
            로그아웃
          </button>
        </div>
      ) : (
        <span>로그인하지 않았습니다.</span>
      )}
    </div>
  );
};

export default SideFooter;
