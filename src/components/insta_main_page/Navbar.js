import Insta_logo from '../images/insta-logo.png';
import avathar from '../images/avathar.jpg';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const history = useHistory();
    const [style, setStyle] = useState("far fa-heart")
    
    const handleStyle = () => {
        if (style === "far fa-heart") {
            setStyle("fas fa-heart");
        }
        else {
            setStyle("far fa-heart")
        }
        history.push("/likes");
    }

    return (
        <div className="nav-bar">
            <div className="content">
                <img src={ Insta_logo } alt="" className="logo"/>
                <input type="text" placeholder="Search"/>
                <div className="links">
                    <i className="fas fa-home" onClick={()=>history.push("/")}></i>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="far fa-compass"></i>
                    <i className={style} onClick={handleStyle}></i>
                    <img src={avathar} alt="" className="avathar-nav" onClick={()=>history.push("/user")} />
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;
