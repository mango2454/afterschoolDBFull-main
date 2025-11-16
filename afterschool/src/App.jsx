// App.jsx

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { TeacherContext } from "./context/TeacherContext";

import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TeacherAdd from "./pages/TeacherAdd";
import SideList from "./components/SideList/SideList";
import TabMenu from "./components/TabMenu";
import AddRegister from "./components/AddRegister/AddRegister";
import MainContent from "./components/MainContent/MainContent";
import Add from "./components/AddRegister/Add/Add";
import StudentPage from "./pages/StudentPage/StduentPage";
import AdminPage from "./pages/AdminPage/AdminPage";

// ---------------- Mock Data ----------------
const RegisterSituationData = [
  {
    id: 1,
    title: "UI구현",
    sumRegister: 25,
    check: 15,
    not: 10,
    state: "10/15",
  },
  {
    id: 2,
    title: "UI구현",
    sumRegister: 25,
    check: 15,
    not: 10,
    state: "10/15",
  },
];

const mockData = [
  {
    id: 1,
    title: "UI구현",
    grade: "2학년",
    class: "406호",
    price: "무료",
    teacher: "김교수",
    time: "월,수,금:17:00~18:00",
    limit: "0/20",
    material: "준비물없음",
    explanation: "방과후설명입니다.",
    week: "12주",
    state: "모집중",
  },
  {
    id: 1,
    title: "UI구현",
    grade: "2학년",
    class: "406호",
    price: "무료",
    teacher: "김교수",
    time: "월,수,금:17:00~18:00",
    limit: "0/20",
    material: "준비물없음",
    explanation: "방과후설명입니다.",
    week: "12주",
    state: "모집중",
  },
];

const RegisterData = [
  {
    id: 1,
    name: "김철수",
    studentNumber: 20301,
    AttendCheck: "결석",
    reason: "감기",
    reigisterProgram: "UI구현",
    registerDate: "2023-01-01",
    state: "대기중",
  },
  {
    id: 2,
    name: "박철수",
    studentNumber: 20302,
    AttendCheck: "결석",
    reason: "감기",
    reigisterProgram: "UI구현",
    registerDate: "2023-01-01",
    state: "대기중",
  },
];

const addedStudentData = [
  {
    id: 1,
    name: "김철수",
    phone: "010-1111-2222",
    grade: "20301",
    state: "재학중",
  },
  {
    id: 2,
    name: "김철수",
    phone: "010-2222-2222",
    grade: "20302",
    state: "재학중",
  },
  {
    id: 3,
    name: "김철수",
    phone: "010-3333-2222",
    grade: "20303",
    state: "재학중",
  },
  {
    id: 4,
    name: "김철수",
    phone: "010-4444-2222",
    grade: "20303",
    state: "재학중",
  },
];

const adminTeacherData = [
  { id: 1, name: "김교수", phone: "010-1234-1234" },
  { id: 2, name: "박교수", phone: "010-1234-1234" },
  { id: 3, name: "검교수", phone: "010-1234-1234" },
];

// --------------------------------------------------------

function App() {
  // 탭 · UI 상태들
  const [active, setActive] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState("nomal");
  const [registerActive, setRegisterActive] = useState(0);
  const [attendActive, setAttendActive] = useState("class");
  const [popup, setPopup] = useState(false);
  const [listPopup, setListPopup] = useState(false);
  const [activeComponents, setActiveComponents] = useState("main");
  const [studentRegister, setStudentRegister] = useState("student");
  const [activeTab, setActiveTab] = useState("firstpage");
  const [programPopup, setProgramPopup] = useState(false);
  const [change, setChange] = useState(true);
  const [selectedAfterSchoolId, setSelectedAfterSchoolId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
   const [selectedTitle, setSelectedTitle] = useState("");

   const [registerData, setRegisterData] = useState([]);

   const [selectedDate, setSelectedDate] = useState("");

   const [selectedStudent, setSelectedStudent] = useState(null); // 선택한 학생

  // 회원가입 상태
  const [signUp, setSignUp] = useState({
    id: "",
    name: "",
    password: "",
    role: "",
    phone: "",
  });

  // ---------------- Login 상태 통일 구조 ----------------
  const defaultLogin = {
    id: "",
    password: "",
    name: "",
    type: "",
    phone: "",
  };
const [login, setLogin] = useState(() => {
  // 새로고침 시 localStorage에서 가져오기
  const saved = localStorage.getItem("login");
  const sessionSaved = sessionStorage.getItem("login"); // 새 창 로그인 대비
  return sessionSaved
    ? JSON.parse(sessionSaved)
    : saved
    ? JSON.parse(saved)
    : { id: "", password: "", name: "", phone: "", type: "" };
});

useEffect(() => {
  // 상태 변경 시 localStorage + sessionStorage 동기화
  localStorage.setItem("login", JSON.stringify(login));
  sessionStorage.setItem("login", JSON.stringify(login));
}, [login]);

  // --------------------------------------------------------

  return (
    <TeacherContext.Provider
      value={{
        active,
        setActive,
        activeIndex,
        setActiveIndex,
        mockData,
        mode,
        setMode,
        RegisterData,
        registerActive,
        setRegisterActive,
        RegisterSituationData,
        attendActive,
        setAttendActive,
        popup,
        setPopup,
        listPopup,
        setListPopup,
        activeComponents,
        setActiveComponents,
        studentRegister,
        setStudentRegister,
        activeTab,
        setActiveTab,
        programPopup,
        setProgramPopup,
        addedStudentData,
        adminTeacherData,
        setSignUp,
        signUp,
        login,
        setLogin,
        change,
        setChange,
        selectedAfterSchoolId,
        setSelectedAfterSchoolId,
        searchTerm,
        setSearchTerm,
        registerData,
        setRegisterData,
        selectedTitle,
        setSelectedTitle,
        selectedDate,
        setSelectedDate,
        selectedStudent,
        setSelectedStudent,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Mainpage>
                <MainContent />
              </Mainpage>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Teacher */}
          <Route
            path="/teacheradd"
            element={<TeacherAdd SideList={<SideList />} TabMenu={<TabMenu />} />}
          />

          {/* Student */}
          <Route
            path="/studentpage"
            element={<StudentPage SideList={<SideList />} TabMenu={<TabMenu />} />}
          />

          {/* Admin */}
          <Route
            path="/adminpage"
            element={<AdminPage SideList={<SideList />} TabMenu={<TabMenu />} />}
          />
        </Routes>
      </BrowserRouter>
    </TeacherContext.Provider>
  );
}

export default App;
