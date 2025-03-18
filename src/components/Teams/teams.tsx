import { useEffect, useState } from "react";
import "./teams.css"
import { useNavigate } from "react-router-dom";

function Teams(){

    const [teams, setTeams] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/teams")
        .then((response) => response.json())
        .then((data) => setTeams(data))
        .catch((error) => console.error("error fatching teams:", error));
    }, []);


    return(
        <div className="content-teams">
            <div className="teams-container"> 
                {teams.map((team) => (
                    <div className="teams-cards" style={{backgroundColor: team.color, backgroundImage: `url(${team.image})`}} key={team._id} onClick={() => navigate(`/teams/${team._id}`)}>
                        <div className="overlay">
                            <img src={team.image} className="img-team-overlay" alt="team name" />
                            <span className="team-title">{team.name}</span>
                            <span className="more-details-team">More Details +</span>
                            <img className="nba-icon" src={"https://cdn.nba.com/logos/leagues/logo-nba-logoman.svg"} alt="nba logo" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Teams;