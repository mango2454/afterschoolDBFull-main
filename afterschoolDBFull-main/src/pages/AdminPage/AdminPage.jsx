import "./AdminPage.css"



import SideBar from "../../components/SideBar"
import Main from "../../components/Main/Main"

const AdminPage = ({SideList, TabMenu}) => {

    console.log("Main:", Main);

    return (
      <div className="AdminPage">
        <SideBar>{SideList}</SideBar>
        <Main>{TabMenu}</Main>
      </div>
    );
}

export default AdminPage