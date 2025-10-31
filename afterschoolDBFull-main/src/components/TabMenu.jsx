import AttendTab from "./AttendTab/AttendTab"
import AddRegister from "./AddRegister/AddRegister"
import Register from "./Register/Register"
import { useContext } from "react"
import { TeacherContext } from "../context/TeacherContext"
import Impormation from "./AddRegister/Impormation/Impormation"
import FixedAddForm from "./FixedAddForm/FixedAddForm"
import StudentRegister from "./StudentRegister/StudentRegister"
import StudentRegisterList from "./StudentList/StudentList"
import { useLocation } from "react-router-dom"

import AdminAddStudent from "./AdminAddStudent/AdminAddStudent"
import AdminAddTeacher from "./AdminAddTeacher/AdminAddTeacher"




const TabMenu = () => {

const {activeIndex, setActiveIndex, mode} = useContext(TeacherContext);

const location = useLocation();

const path = location.pathname;

    const TeacherTabs = [
        {name: "방과후등록",components: <AddRegister />},
        {name: "신청현황",components: <Register />},
        {name: "출석관리",components: <AttendTab />},
        {name:"상세페이지", components:<Impormation />},

    ]

    const StduentTabs =[
        {name: "방과후신청", components: <StudentRegister />},
        {name: "신청내역", components: <StudentRegisterList />},
    ]

    const AdminTabs = [
        {name: "학생등록", components: <AdminAddStudent />},
        {name: "선생님등록", components: <AdminAddTeacher />},
    ]

    if(mode === "detail"){
        return <Impormation />
    }

    let tabs2;

if (path.includes("teacheradd")) tabs2 = TeacherTabs;
else if (path.includes("studentpage")) tabs2 = StduentTabs;
else if (path.includes("adminpage")) tabs2 = AdminTabs;

console.log("현재 path:", path);


return (
  <div className="TabMenu">
{tabs2 && typeof activeIndex === "number" && tabs2[activeIndex] ? (
  tabs2[activeIndex].components
) : (
  <div>탭을 선택해주세요.</div>
)}

  </div>
);
}

export default TabMenu