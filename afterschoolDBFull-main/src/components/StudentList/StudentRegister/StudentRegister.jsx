 


import RegisterListHead from "./RegisterListHead/RegisterListHead"
import StudentRegisterBox from "./StudentRegisterBox/StudentRegisterBox";

const StudentRegister = () => {
    return(
        <div>
        <RegisterListHead title="신청내역" />
        <StudentRegisterBox />

        </div>
    )
}

export default StudentRegister;