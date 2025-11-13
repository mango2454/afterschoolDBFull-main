import { useNavigate } from "react-router-dom"

import "./MainContent.css"

const MainContent = () => {

    const LoginNav = useNavigate();
    const SignUpNav = useNavigate();

    const Login = () => {
        LoginNav('/login');
    }

    const SignUp = () => {
        SignUpNav('/signup');
    }

    return(
        <div className="MainContent">
            <div className="MainTitle">
                <h1>로그인후 이용해주세요</h1>
            </div>
            <div className="MainBtn">
                <button onClick={Login}>로그인</button>
                <button onClick={SignUp}>회원가입</button>
            </div>
        </div>
    )
}

export default MainContent