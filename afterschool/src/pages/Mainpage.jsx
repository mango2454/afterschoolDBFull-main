import SideBar from "../components/SideBar"
import Main from "../components/Main/Main"

import "./Mainpage.css"
const Mainpage = ({children}) => {
    return(
        <div className="Mainpage">
            <SideBar />
            <Main children={children}/>
        </div>
    )
}

export default Mainpage