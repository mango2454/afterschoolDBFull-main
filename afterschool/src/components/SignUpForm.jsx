import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../context/TeacherContext";
import axios from "axios";

const SignUpForm = () => {
  const { signUp, setSignUp } = useContext(TeacherContext);
  const [role, setRole] = useState("");
  const goLogin = useNavigate();

  // 🔹 역할 변경 (선생님/학생)
  const changeTeacher = () => {
    setRole("teacher");
    setSignUp((prev) => ({ ...prev, role: "teacher" }));
  };

  const changeStudent = () => {
    setRole("student");
    setSignUp((prev) => ({ ...prev, role: "student" }));
  };

  // 🔹 입력값 변경 핸들러
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 회원가입 요청
  const handleSignUp = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("user_id", signUp.id);
      formData.append("user_name", signUp.name);
      formData.append("user_password", signUp.password);
      formData.append("user_phone", signUp.phone); // ✅ 전화번호 추가
      formData.append("user_identy", signUp.role);

      const response = await axios.post(
        "http://localhost:8083/afterschool_(1)/Signup.jsp",
        formData.toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (response.data.trim() === "success") {
        alert("회원가입 완료");

        // ✅ 입력 폼 초기화
        setSignUp({
          id: "",
          name: "",
          password: "",
          role: "",
          phone: "",
        });
        setRole("");

        goLogin("/login");
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 통신 오류");
    }
  };

  return (
    <div className="SignUpForm">
      <div className="Signup">
        <h1>회원가입</h1>
      </div>

      <div className="inputBox">
        <div className="input1">
          <input
            type="text"
            name="id"
            onChange={onChangeValue}
            value={signUp.id}
            placeholder="아이디를 입력해주세요"
          />
          <input
            type="text"
            name="name"
            onChange={onChangeValue}
            value={signUp.name}
            placeholder="이름을 입력해주세요"
          />
        </div>

        <div className="input2">
          <input
            type="text"
            name="phone"
            onChange={onChangeValue}
            value={signUp.phone}
            placeholder="전화번호를 입력해주세요 (ex: 01011112222)"
          />
        </div>

        <div className="input2">
          <input
            type="password"
            name="password"
            onChange={onChangeValue}
            value={signUp.password}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>

        <div className="input3">
          <button
            className={role === "teacher" ? "ClickBtn" : "Btn"}
            onClick={changeTeacher}
          >
            선생님
          </button>
          <button
            className={role === "student" ? "ClickBtn" : "Btn"}
            onClick={changeStudent}
          >
            학생
          </button>
        </div>

        <div className="SignBtn">
          <button onClick={handleSignUp}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
