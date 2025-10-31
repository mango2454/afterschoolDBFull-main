import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { TeacherContext } from "./context/TeacherContext"; // Context import

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


const RegisterSituationData = [
  {
    id: 1,
    title: "UI구현",
    sumRegister: 25, // 총신청수
    check: 15, //출석
    not: 10, //결석
    state: "10/15"
  },
  {
    id: 2,
    title: "UI구현",
    sumRegister: 25,
    check: 15,
    not: 10,
    state: "10/15"
  },
];

const mockData =[
    {
    id: 1,
    title: "UI구현",
    grade:"2학년",
    class: "406호",
    price: "무료",
    teacher: "김교수",
    time: "월,수,금:17:00~18:00",
    limit: "0/20",
    material: "준비물없음",
    explanation: "방과후설명입니다.",
    week:"12주",
    state: "모집중"
    },
    {
    id: 1,
    title: "UI구현",
    grade:"2학년",
    class: "406호",
    price: "무료",
    teacher: "김교수",
    time: "월,수,금:17:00~18:00",
    limit: "0/20",
    material: "준비물없음",
    explanation: "방과후설명입니다.",
    week:"12주",
    state: "모집중"
    },
]

const RegisterData = [
  {
    id: 1,
    name: "김철수",
    studentNumber: 20301,
    AttendCheck: "결석",
    reason: "감기",
    reigisterProgram: "UI구현",
    registerDate: "2023-01-01",
    state: "데기중",
  },
  {
    id: 2,
    name: "박철수",
    studentNumber: 20302,
    AttendCheck: "결석",
    reason: "감기",
    reigisterProgram: "UI구현",
    registerDate: "2023-01-01",
    state: "데기중",
  },
];


const addedStudentData = [
  {
    id: 1,
    name: "김철수",
    phone: "010-1111-2222",
    grade: "20301",
    state: "재학중"
  },
  {
    id: 2,
    name: "김철수",
    phone: "010-2222-2222",
    grade: "20302",
    state: "재학중"
  },
  {
    id: 3,
    name: "김철수",
    phone: "010-3333-2222",
    grade: "20303",
    state: "재학중"
  },
  {
    id: 4,
    name: "김철수",
    phone: "010-4444-2222",
    grade: "20303",
    state: "재학중"
  },
]

const adminTeacherData = [
  {
    id: 1,
    name: "김교수",
    phone: "010-1234-1234"
  },
  {
    id: 2,
    name: "박교수",
    phone: "010-1234-1234"
  },
  {
    id: 3,
    name: "검교수",
    phone: "010-1234-1234"
  },
]



function App() {
  const [active, setActive] = useState(0); // 프로그램 목록 / 등록하기
  const [activeIndex, setActiveIndex] = useState(0); // 사이드 메뉴 인덱스
  const [mode, setMode] = useState("nomal");
  const [registerActive, setRegisterActive] = useState(0) //출석관리 
  const [attendActive, setAttendActive] = useState("class")
  const [popup, setPopup] = useState(false)
  const [listPopup, setListPopup] = useState(false)
  const [activeComponents, setActiveComponents] = useState('main')
  const [studentRegister, setStudentRegister] = useState('student')
  const [activeTab, setActiveTab] = useState("firstpage");
  const [programPopup, setProgramPopup] = useState(false)

  const [signUp, setSignUp] = useState({
    id: "",
    name:"",
    password:"",
    role:""
  })

const [login, setLogin] = useState(() => {
  const saved = localStorage.getItem("login");
  return saved ? JSON.parse(saved) : { id: "", password: "", name: "" };
});

useEffect(() => {
  localStorage.setItem("login", JSON.stringify(login));
}, [login])


const [addStudentData, setAddStudentData] = useState({
  student_name: "",
  student_grade: "",
  student_phone: ""
})

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
        addStudentData,
        setAddStudentData
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
          <Route
            path="/teacheradd"
            element={
              <TeacherAdd SideList={<SideList />} TabMenu={<TabMenu />} />
            }
          />
          <Route
            path="/studentpage"
            element={
              <StudentPage SideList={<SideList />} TabMenu={<TabMenu />} />
            }
          />
          <Route
            path="/adminpage"
            element={
              <AdminPage SideList={<SideList />} TabMenu={<TabMenu />} />
            }
          />
        </Routes>
      </BrowserRouter>
    </TeacherContext.Provider>
  );
}

export default App;
