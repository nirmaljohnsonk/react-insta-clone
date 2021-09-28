import firebase  from '../Firebase'; 
import {useState} from 'react';

function PostUpload() {
    const[progres,setProgres] = useState(0)
    const[file,setFile] = useState(null);
    const[caption,setCaption] = useState()
    const handleUpload = () => {
        let storageRef = firebase.storage().ref('uploads/' + file.name)
        let tasks = storageRef.put(file);
        tasks.on('state_changed',                                                    
        snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgres(progress);
         }, 
        error => {
            console.log(error)
         },  
        () => {    
            tasks.snapshot.ref.getDownloadURL()
            .then(downloadURL => {
                firebase.firestore().collection("posts").doc().set({
                    caption:caption,
                    username:"nirmaljohnsonk",
                    imgurl:downloadURL
                })
            });
        })
    }
    return (
        <div className="postupload">
            <div className="upload">
                <h1>Start capturing and sharing your moments.</h1>
                <progress value={progres} max="100" id="uploder">0%</progress><br />
                <input type="file"  onChange={e=>setFile(e.target.files[0])} />
                <input type="text" placeholder="Caption" onChange={(e)=>setCaption(e.target.value)} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )
}

export default PostUpload;
