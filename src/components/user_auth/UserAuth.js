import Signup from './Signup';
import Login from './Login';
import './userauth.css';
import { Route, Switch } from "react-router-dom";

function Userauth() {
    
   
    return (
        <div className="user-auth">
            <Switch>
                <Route path="/auth/signup" component={Signup} />
                <Route path="/auth/login" component={Login} />
            </Switch>
        </div>
    )
}

export default Userauth;