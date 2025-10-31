import SideHeader from "./SideHeader"
import SideMain from "./SideMain"
import SideFooter from "./SideFooter"

const SideBar = ({children}) => {
    return(
        <div className="SideBar">
            <SideHeader />
            <SideMain children={children}  />
            < SideFooter />
        </div>
    )
}

export default SideBar