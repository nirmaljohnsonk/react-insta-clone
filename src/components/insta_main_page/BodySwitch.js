import { Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Body from "./Body";
import Likes from './Likes';
import User from './User';

function Bodyswitch() {

    return (
        <div className="body-switch">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Body} />
                <Route path="/user" component={User} />
                <Route path="/likes" component={Likes} />
            </Switch>
        </div>
    )
}

export default Bodyswitch
