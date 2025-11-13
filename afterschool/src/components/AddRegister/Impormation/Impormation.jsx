import ImpormationHead from "./ImpormationHead/ImpormationHead"
import ImpormationNav from "./ImpormationNav/ImpormationNav"
import ImpormationMain from "./ImpormationMain/ImpormationMain"
import { TeacherContext } from "../../../context/TeacherContext"
import FixedMain from "../../FixedAddForm/FixedMain/FixedMain"

import { useContext } from "react"

const Impormation = () => {

    const {change} = useContext(TeacherContext)

    return(
        <div>
            <ImpormationHead />
            {change === true ? <ImpormationNav /> : null}
            {change == true ? <ImpormationMain />: <FixedMain />}
        </div>
    )
}

export default Impormation