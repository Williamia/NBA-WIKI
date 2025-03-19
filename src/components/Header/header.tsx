import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="content-header">
            <img src={"https://cdn.nba.com/logos/leagues/logo-nba.svg"} alt="nba-logo" />
            <div className="container">
                <Link className="link-header" to ="/"><p>Home</p></Link>
                <Link className="link-header" to ="/teams"><p>Teams</p></Link>
                <Link className="link-header" to ="/players"><p>Players</p></Link>
                <Link className="link-header" to ="/about"><p>About us</p></Link>
            </div>
        </div>
    );
}

export default Header;