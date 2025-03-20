import "./loader.css"

function Loader(){

    const gifLoad = "https://i.pinimg.com/originals/7a/52/1c/7a521c2683788893c42f48e431413838.gif";

    return(
        <div className="content-loader">
            <img src={gifLoad} alt="loading" />
        </div>
    );
}

export default Loader;