import avathar from '../images/avathar.jpg';
import { useState } from 'react';

function Posts({ post }) {
    const [style, setStyle] = useState("far fa-heart")
    const handleStyle = () => {
        if (style === "far fa-heart") {
            setStyle("fas fa-heart fa-heart-clicked");
        }
        else {
            setStyle("far fa-heart")
        }
    }
    return (
        <div className="posts">
            <div className="username">
                <div>
                    <img src={avathar} alt="" className="avathar" />
                    <h5>{post.username}</h5>
                </div>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="image">
                <img src={post.imgurl} alt="" />
            </div>
            <div className="user-feedback">
                <div className="left">
                    <i className={style} onClick={handleStyle}></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                </div>
                <div className="right">
                    <i className="far fa-bookmark"></i>
                </div>
            </div>
            <div className="comment">
            </div>
            <div className="add-comment">
                <i className="far fa-smile"></i>
                <input type="text" />
                <input type="submit" value="POST" />
            </div>
        </div>
    )
}

export default Posts;
