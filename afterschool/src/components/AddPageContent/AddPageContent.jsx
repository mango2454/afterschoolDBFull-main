import { useContext } from "react";
import "./AddPageContent.css"
import { TeacherContext } from "../../context/TeacherContext";
import AddStudent from "../AddStudent/AddStudent";
import AddTeacher from "../AddTeacher/AddTeacher";


const AddPageContent = () => {

  const { activeComponents, setActiveComponents } = useContext(TeacherContext);
  console.log(activeComponents)


    return (
      <div>
        {activeComponents === 'main' && (
          <div className="AddPageContent">
            <div>
              <h1>등록이 되어야지 이용할 수 있습니다</h1>
            </div>
            <div>
              <button onClick={() => setActiveComponents('student')}>학생등록하기</button>
              <button onClick={() => setActiveComponents('teacher')}>선생님등록하기</button>
            </div>
          </div>
        )}

        {activeComponents === 'student' && <AddStudent />}
        {activeComponents === 'teacher' && <AddTeacher />}
      </div>
    );
}

export default AddPageContent;