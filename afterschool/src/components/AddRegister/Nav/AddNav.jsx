import { useContext } from "react"
import "./AddNav.css"
import { TeacherContext } from "../../../context/TeacherContext"

const AddNav = () => {
    const { change, searchTerm, setSearchTerm } = useContext(TeacherContext)

    if (change) {
        return (
            <div className="AddNav">
                <div>
                    <h2>검색</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="방과후명을 입력해주세요"
                        value={searchTerm || ""}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        )
    }

    return null
}

export default AddNav
