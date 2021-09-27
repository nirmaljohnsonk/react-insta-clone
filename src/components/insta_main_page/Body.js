import { useState, useEffect } from "react";
import Status from "./Status";
import Posts from './Posts';
import Sidebody from './SideBody';
import firebase from '../Firebase';
import LoadingData from "./LoadingData";

function Body() {
    const [posts, setPosts] = useState(null)
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        firebase.firestore().collection('posts').onSnapshot(snapshot => {
            setLoading(false);
            setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
    }, []);
    return (
        <div className="body">
            <div className="body-content">
                <div className="main-body">
                    <Status />
                    {Loading && <LoadingData />}
                    {
                        posts && posts.map(post => {
                            return (<Posts post={post} key={post.id} />)
                        })
                    }
                </div>
                <div className="side-body">
                    <Sidebody />
                </div>
            </div>
        </div>
    )
}

export default Body
