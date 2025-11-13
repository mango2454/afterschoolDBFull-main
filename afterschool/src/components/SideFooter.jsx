import { useContext } from 'react';
import { TeacherContext } from '../context/TeacherContext';
import { useNavigate } from 'react-router-dom';

const SideFooter = () => {
    const { login, setLogin } = useContext(TeacherContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setLogin({ id: '', password: '', name: '' });
        localStorage.removeItem('login');
        navigate('/');
    };

    return (
        <div className="SideFooter" style={{ textAlign: "center", padding: "10px", fontSize: "12px", color: "#888" }}>
            {login && login.id ? (
                <div>
                    <span>{login.name}</span>
                    <button onClick={handleLogout} style={{ marginLeft: "10px" }}>로그아웃</button>
                </div>
            ) : (
                <span>로그인하지 않았습니다.</span>
            )}
        </div>
    );
};

export default SideFooter;
