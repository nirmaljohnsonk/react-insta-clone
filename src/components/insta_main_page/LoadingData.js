import loading from '../images/loading.gif';
function LoadingData() {
    return (
        <div className="loading-data">
            <div className="loading-inner">
            <img src={loading} alt="" />
            </div>
        </div>
    )
}

export default LoadingData;
