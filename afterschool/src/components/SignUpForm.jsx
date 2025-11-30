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
    // 🔔 필수 입력값 유효성 검사 🔔
    if (!signUp.id) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!signUp.name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!signUp.phone) {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (!signUp.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!signUp.role) {
      alert("회원 구분을 선택해주세요 (선생님/학생).");
      return;
    }
    
    // 🔔 아이디 특수 문자 검사 추가 🔔
    // 정규식: 영문 대소문자 (a-zA-Z)와 숫자 (0-9)가 아닌 모든 문자 (특수 기호)를 찾습니다.
    const specialCharRegExp = /[^a-zA-Z0-9]/g;
    
    if (specialCharRegExp.test(signUp.id)) {
      alert("아이디에는 특수 기호를 사용할 수 없습니다. (영문/숫자만 가능)");
      return;
    }
    // 🔔 아이디 특수 문자 검사 끝 🔔

    try {
      const formData = new URLSearchParams();
      formData.append("user_id", signUp.id);
      formData.append("user_name", signUp.name);
      formData.append("user_password", signUp.password);
      formData.append("user_phone", signUp.phone);
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
        // 서버에서 ID 중복 등의 오류를 처리했을 경우
        alert("회원가입 실패: " + response.data.trim());
      }
    } catch (error) {
      console.error(error);
      alert("서버 통신 오류가 발생했습니다.");
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