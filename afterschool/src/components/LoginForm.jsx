import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../context/TeacherContext";
import axios from "axios";

const LoginForm = () => {
  const { login, setLogin } = useContext(TeacherContext); // App.jsx에서 기본값 보장
  const navigate = useNavigate();

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 실행
  const handleLogin = async () => {
    if (!login?.id || !login?.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("user_id", login.id);
      params.append("user_password", login.password);

      const res = await axios.post(
        "http://localhost:8083/afterschool_(1)/Login.jsp",
        params.toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      const data = res.data;
      console.log("서버 응답:", data);

      if (data.result === "success") {
        alert(`${data.user_name}님 로그인 성공!`);

        const userData = {
          id: login.id,
          password: login.password,
          name: data.user_name,
          type: data.user_type,
        };

        setLogin(userData);
        localStorage.setItem("login", JSON.stringify(userData));

        // 역할별 페이지 이동
        if (data.user_type === "teacher") navigate("/teacheradd");
        else if (data.user_type === "student") navigate("/studentpage");
        else if (data.user_type === "admin") navigate("/adminpage");
        else alert("알 수 없는 사용자 유형입니다.");
      } else if (data.result === "wrong_password") {
        alert("비밀번호가 틀렸습니다.");
      } else if (data.result === "no_id") {
        alert("존재하지 않는 아이디입니다.");
      } else {
        alert("서버 오류가 발생했습니다.");
      }
    } catch (err) {
      console.error("로그인 오류:", err);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  // 회원가입 페이지 이동
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
            value={login?.id || ""}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={login?.password || ""}
            onChange={handleChange}
          />
        </div>

        <div className="LoginBtn">
          <button onClick={handleLogin}>로그인</button>
        </div>

        <div className="footerTitle">
          <h4 onClick={goToSignup}>
            아이디가 없으신가요? 회원가입 하러가기
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
