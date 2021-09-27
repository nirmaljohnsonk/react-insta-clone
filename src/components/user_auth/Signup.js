import { Link } from 'react-router-dom';
import useAuth  from '../useAuth';
import Insta_logo from '../images/insta-logo.png';

function Sighup() {
    const {handleSignup,setEmail,setPassword} = useAuth()
    
    return (
        <div className="signup">
            <div className="signup-content">
                <img src={Insta_logo} alt="" />
                <form>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" /><br />
                    <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} name="password" placeholder="Password" /><br />
                    <button type="submit" onClick={handleSignup} >Sign Up</button>
                </form>
            </div>
            <div className="auth-q">
                <p>Have an account? <Link to="/auth/login" className="link"><span>Login</span></Link> </p>
            </div>
        </div>  
    )
}

export default Sighup;
