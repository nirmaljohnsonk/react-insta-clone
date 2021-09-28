import firebase from '../Firebase';

function PostUpload() {
    const handleUpload = (e) => {
        let file = e.target.files[0];
        let storageRef = firebase.storage().ref('uploads/' + file.name)
        let tasks = storageRef.put(file);
        tasks.on('state_changed',                                                    
        () => { },  //Upload Progress   
        () => { },  //Upload Error 
        () => {     //Upload Feedback
            console.log("Upload Completed");
        })
    }
    return (
        <div className="postupload">
            <div className="upload">
                <progress value="0" max="100" id="uploder">0%</progress><br />
                <label className="fileUpload btn">
                    Browse <input type="file" hidden="" onChange={(e) => handleUpload(e)} />
                </label>
            </div>
        </div>
    )
}

export default PostUpload;
