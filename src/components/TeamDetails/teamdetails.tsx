import "./teamdetails.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/loader";

function TeamDetails(){

    const { id } = useParams();
    const [team, setTeam] = useState<any | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        window.scrollTo(0,0);
        fetch(`https://nba-wiki-api.vercel.app/teams/${id}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error("time not found");
            }
            return response.json();
        })
        .then((data) => {
            setTeam(data);
        })
        .catch((error) => {
            setError(error.message);
        })
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!team) {
        return <Loader />;
    }


    return(
        <div className="content-details-teams">
            <div className="banner-teams" style={{backgroundColor: team.color}}>
                <div className="container-banner-teams">
                    <div className="banner-teams-logo" style={{backgroundImage: `url(${team.image})`}} />
                        <div className="content-image-details">
                            <img src={team.image} alt="team-name" />
                        </div> 
                        <div className="content-text-details">
                            <div className="title-details-text">
                                <span className="name-team-details"><b>{team.name}</b></span>
                                <span>{team.conference} conference</span>
                            </div>
                            <div className="info-team-details">
                                <div className="text-details-coach">
                                    <span className="title-info-team"><b>Coach</b></span>
                                    <span className="subtitle-info-team">{team.coach}</span>
                                </div>
                                <div className="text-details-city">
                                    <span className="title-info-team"><b>City</b></span>
                                    <span className="subtitle-info-team">{team.city}</span>
                                </div>
                            </div>
                        </div>          
                </div>
            </div>

            <div className="container-details-teams">
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
                <span>{team.name}</span>
            </div>
        </div>
    );
}

export default TeamDetails;