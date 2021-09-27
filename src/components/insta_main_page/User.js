import useAuth from '../useAuth';
import avathar from '../images/avathar.jpg'

function User() {
   const {handleLogout} = useAuth(); 
    return (
        <div className="user__page">
            <div className="user__top">
                <img src={avathar} alt="user_avathar" />
                <div className="user__details">
                    <p>Username</p>
                    <button>Edit Profile</button><br />
                    <p><span>0 posts</span><span>10 followers</span> <span>135 following</span></p>
                </div>
            </div>
            <button type="submit" onClick={handleLogout} >Log Out</button>
        </div>
    )
}

export default User;
