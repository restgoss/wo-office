import './Logout.css';
import {Navigate, useNavigate} from "react-router-dom";

export default function Logout(props) {
    const navigate = useNavigate();
    function handleLogout(evt) {
        evt.preventDefault()
        navigate('/');
    }
    return (
        <div className='logout' onClick={handleLogout}>
            <p className='paragraph'>Завершить сессию</p>
        </div>
    )
}