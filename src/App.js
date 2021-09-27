import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Userauth from './components/user_auth/UserAuth';
import Bodyswitch from './components/insta_main_page/BodySwitch';
import Loading from './components/insta_main_page/Loading';
import firebase from './components/Firebase';
import './style.css'


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const subscribe = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setUser(user);
          setLoading(false);
        } else {
          history.push('/auth/login')
        }
      });
    }
    return subscribe();
  }, [history]);

  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={Userauth} />
        <Route path="/" >
          {loading && <Loading></Loading>}
          {user && <Bodyswitch />}
        </Route>
        <Route path="*" component={() => <h3>App 404 Page</h3>} />
      </Switch>
    </div>
  );
}

export default App;
