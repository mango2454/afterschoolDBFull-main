import AddHead from "./Head/AddHead";
import AddNav from "./Nav/AddNav";
import AddMain from "./AddRegiMain/AddMain";
import "./AddRegister.css"
import AddList from "./AddList/AddList";
import Add from "./Add/Add";
import Impormation from "./Impormation/Impormation";
import { Component } from "react";
import { useContext } from "react";
import { TeacherContext } from "../../context/TeacherContext";
import FixedAddForm from "../FixedAddForm/FixedAddForm";


const addTab = [
  {name:"프로그램목록", components:<AddList />},
  {name:"등록하기", components:<Add />},
  {name:"수정", components:<FixedAddForm />},
]

const AddRegister = () => {

  const {active} = useContext(TeacherContext);


  console.log("현재 active:", active);



  return (
    <div className="AddRegister">
      <AddHead />
      {addTab[active].components}
    </div>
  );
};

export default AddRegister;
