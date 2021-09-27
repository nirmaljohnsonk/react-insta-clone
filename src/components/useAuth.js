import { useState } from "react";
import { useHistory } from "react-router";
import firebase from "./Firebase";

const useAuth = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Signed In Successfully");
            })
            .catch((error) => {
            });
    }

    //Sign In User
    const handleSignin = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Signed In Successfully");
                history.push('/');
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log(errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleLogout = (e) => {
        e.preventDefault()
        console.log("handleLogout")
        firebase.auth().signOut()
            .then(() => {
                history.push('/auth/login');
            })
    }

    return { setEmail, setPassword, handleSignin, handleSignup, handleLogout }
}

export default useAuth;