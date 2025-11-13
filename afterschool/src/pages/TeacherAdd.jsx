import "./teacherAdd.css"

import { useContext } from "react";
import { TeacherContext } from "../context/TeacherContext";
import SideList from "../components/SideList/SideList";
import TabMenu from "../components/TabMenu";
import AddRegister from "../components/AddRegister/AddRegister";
import Main from "../components/Main/Main";
import SideBar from "../components/SideBar";


const TeacherAdd = ({SideList, TabMenu}) => {


  return (
    <div className="TeacherAdd">
      <SideBar>{SideList}</SideBar>
      <Main>{TabMenu}</Main>
    </div>
  );
};

export default TeacherAdd;
