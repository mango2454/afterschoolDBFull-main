import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../context/TeacherContext";
import axios from "axios";

const Login = () => {
  const { setLogin } = useContext(TeacherContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const resetInputs = () => setInputs({ id: "", password: "" });

  const handleLogin = async () => {
    if (!inputs.id || !inputs.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("user_id", inputs.id);
      params.append("user_password", inputs.password);

      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/Login.jsp",
        params.toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      const data = res.data;

      if (data.result === "success") {
        const userData = {
          id: inputs.id,
          password: inputs.password,
          name: data.user_name,
          type: data.user_type,
          phone: data.user_phone ?? "",
        };

        // Context 저장
        setLogin(userData);

        // 세션 스토리지에 저장 (새 창에서 로그인 상태 유지)
        sessionStorage.setItem("login", JSON.stringify(userData));

        alert(`${data.user_name}님 로그인 성공!`);
        resetInputs();

        if (data.user_type === "teacher") navigate("/teacheradd");
        else if (data.user_type === "student") navigate("/studentpage");
        else if (data.user_type === "admin") navigate("/adminpage");
      } else if (data.result === "wrong_password") {
        alert("비밀번호가 틀렸습니다.");
        resetInputs();
      } else if (data.result === "no_id") {
        alert("존재하지 않는 아이디입니다.");
        resetInputs();
      } else {
        alert("서버 오류가 발생했습니다.");
        resetInputs();
      }
    } catch (err) {
      console.error("로그인 오류:", err);
      alert("서버와 통신 중 오류가 발생했습니다.");
      resetInputs();
    }
  };

  const goToSignup = () => navigate("/signup");

  return (
    <div className="LoginForm">
      <div className="LoginTitle">
        <h1>로그인</h1>
      </div>
      <div className="LoginBox">
        <div className="LoginInput">
          <input
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요"
            value={inputs.id}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <div className="LoginBtn">
          <button onClick={handleLogin}>로그인</button>
        </div>
        <div className="footerTitle">
          <h4 onClick={goToSignup} style={{ cursor: "pointer" }}>
            아이디가 없으신가요? 회원가입 하러가기
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
