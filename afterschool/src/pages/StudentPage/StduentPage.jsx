import "./StduentPage.css"


import SideBar from "../../components/SideBar"
import Main from "../../components/Main/Main"



const StudentPage = ({SideList, TabMenu}) => {
    return (
      <div className="StudentPage">
        <SideBar>{SideList}</SideBar>
        <Main>{TabMenu}</Main>
      </div>
    );
}

export default StudentPage