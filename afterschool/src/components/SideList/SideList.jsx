import "./SideList.css"
import { useState } from "react"
import { useContext } from "react";
import { TeacherContext } from "../../context/TeacherContext";
import { useLocation } from "react-router-dom";


const SideList = () => {


    const location = useLocation();

    // 처음에 0으로 설정 → 첫 번째 메뉴 활성화

    const {activeIndex, setActiveIndex} = useContext(TeacherContext);


    const path = location.pathname;


    const Teachermenu = ["방과후등록", "신청현황", "출석관리"];
    const Studentmenu = ["방과후신청", "신청내역"];
    const Adminpage = ["학생목록", "선생님목록"]

    console.log(activeIndex)

    let menu2

    if (path.includes("/teacheradd")) {
        menu2 = Teachermenu
    }else if(path.includes("/studentpage")){
        menu2 = Studentmenu
    } else if (path.includes("/adminpage")) {
        menu2 = Adminpage
    }
      return (
        <div className="SideList">
          <ul>
            {menu2.map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? "ClickLi" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default SideList
