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

        mode,
        setMode,

        registerActive,
        setRegisterActive,

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
