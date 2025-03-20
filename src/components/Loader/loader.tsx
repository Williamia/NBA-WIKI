import "./loader.css"

function Loader(){

    const gifLoad = "https://i.pinimg.com/originals/64/a2/22/64a2223effcef1e2c93a5bdfa7712d65.gif";

    return(
        <div className="content-loader">
            <img src={gifLoad} alt="loading" />
        </div>
    );
}

export default Loader;