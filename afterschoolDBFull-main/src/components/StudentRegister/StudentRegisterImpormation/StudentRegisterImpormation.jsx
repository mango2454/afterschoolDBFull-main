import StudentImpormationHead from "./StudentImpormationHead/StudentImpormationHead"
import ImpormationNav from "../../AddRegister/Impormation/ImpormationNav/ImpormationNav"
import ImpormationMain from "../../AddRegister/Impormation/ImpormationMain/ImpormationMain"

const StudentRegisterImpormation = () => {
    return(
        <div>
            <StudentImpormationHead />
            <ImpormationNav />
            <ImpormationMain />
        </div>
    )
}

export default StudentRegisterImpormation