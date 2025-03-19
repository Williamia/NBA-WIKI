import "./footer.css"
import andow from "../../assets/AndowWilliam.png"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="content-footer">
            <div className="container-footer">
                <img className="nba-logo-footer" src={"https://cdn.nba.com/logos/leagues/logo-nba-logoman.svg"} alt="nba logo" />
                    <div className="text-footer">
                        <div className="text-footer-links">
                        <Link className="link-header" to ="/"> <p className="link-footer">home</p> </Link>
                        <Link className="link-header" to ="/teams"> <p className="link-footer">teams</p> </Link>
                        <Link className="link-header" to ="/players"> <p className="link-footer">players</p> </Link>
                        <Link className="link-header" to ="/about"> <p className="link-footer">about us</p> </Link>
                        </div>
                        <div className="details-footer">
                            <div className="details-footer-icons">
                            <img width="40" height="40" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
                            <img width="40" height="40" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/>
                            <img width="40" height="40" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                            <img width="40" height="40" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                            <img width="40" height="40" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
                            </div>
                            <div className="details-footer-text">
                            <Link className="link-header" to ="/"> <p className="link-footer">home</p> </Link>
                            <Link className="link-header" to ="/teams"> <p className="link-footer">teams</p> </Link>
                            <Link className="link-header" to ="/players"> <p className="link-footer">players</p> </Link>
                            <Link className="link-header" to ="/about"> <p className="link-footer">about us</p> </Link>
                            </div>
                        </div>
                    </div>
                <img className="andow-img" src={andow} alt="william matos" />
            </div>
        </div>
    );
}

export default Footer;