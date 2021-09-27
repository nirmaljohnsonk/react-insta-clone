import { Link } from 'react-router-dom';
import useAuth from '../useAuth';
import Insta_logo from '../images/insta-logo.png';

function Login() {
    const {handleSignin,setEmail,setPassword} = useAuth()
    return (
        <div className="login">
            <div className="signup-content">
            <img src={Insta_logo} alt="" />
            <form >
                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" /><br />
                <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} name="password" placeholder="Password" /><br/>
                <button type="submit" onClick={handleSignin} >Log In</button>
            </form>
            </div>
            <div className="auth-q">
            <p>Don't have an account? <Link to="/auth/signup" className="link"><span>Sign Up</span></Link> </p>              
            </div>
        </div>
    )
}

export default Login;
