import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Body from "./Body";
import Likes from './Likes';
import User from './User';
import PostUpload from './PostUpload';
import Insta_logo from '../images/insta-logo.png';
import avathar from '../images/avathar.jpg';

function Bodyswitch() {
    const history = useHistory();
    const [style, setStyle] = useState("far fa-heart")

    const handleStyle = () => {
        if (style === "far fa-heart") {
            setStyle("fas fa-heart");
        }
        else {
            setStyle("far fa-heart")
        }
    }
    const handlePost = () => {
        history.push("/postupload");
    }
    return (
        <div className="body-switch">
            <div className="nav-bar">
                <div className="content">
                    <img src={Insta_logo} alt="" className="logo" />
                    <input type="text" placeholder="Search" />
                    <div className="links">
                        <i className="fas fa-home" onClick={() => history.push("/")}></i>
                        <i className="fab fa-facebook-messenger"></i>
                        <i className="far fa-compass" onClick={handlePost}></i>
                        <i className={style} onClick={handleStyle}></i>
                        <img src={avathar} alt="" className="avathar-nav" onClick={() => history.push("/user")} />
                    </div>

                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Body} />
                <Route path="/user" component={User} />
                <Route path="/likes" component={Likes} />
                <Route path="/postupload" component={PostUpload}></Route>
            </Switch>
        </div>
    )
}

export default Bodyswitch
