import { useState, useEffect } from "react";
import Posts from './Posts';
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
                    <div className="status">
                    </div>
                    {Loading && <LoadingData />}
                    {
                        posts && posts.map(post => {
                            return (<Posts post={post} key={post.id} />)
                        })
                    }
                </div>
                <div className="side-body">
                    <div className="side-body-comp">
                        <div className="heading">
                            <h3>Suggestions For You</h3>
                            <h6>See All</h6>
                        </div>
                        <div className="suggestions">
                            <div className="user">
                                <div className="side-avathar"></div>
                                <h6>nirmal_johnson_k</h6>
                            </div>
                            <h4>Follow</h4>
                        </div>
                        <div className="suggestions">
                            <div className="user">
                                <div className="side-avathar"></div>
                                <h6>nirmal_johnson_k</h6>
                            </div>
                            <h4>Follow</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
