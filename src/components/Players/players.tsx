import "./players.css"
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";

function Players(){

    interface Player {
        _id: string;
        name: string;
        number: number;
        position: string;
        team: string;
        image: string;
        ppg: number;
        rpg: number;
        apg: number;
        height: number;
        weight: number;
        country: string;
        age: number;
        birthdate: string;
        draft: string;
        experience: string;
      }
      
      interface Team {
        _id: string;
        name: string;
        city: string;
        image: string;
        coach: string;
        color: string;
        players: Player[]; 
      }

      const [teams, setTeams] = useState<Team[]>([]);
      const [isLoading, setIsLoading] = useState(true); 
  
      useEffect(() => {
          fetch("https://nba-wiki-api.vercel.app/teams")
              .then((response) => response.json())
              .then((data) => {
                  setTeams(data);
                  setIsLoading(false); 
              })
              .catch((error) => {
                  console.error("Erro ao buscar times:", error);
                  setIsLoading(false); 
              });
      }, []);
  
      if (isLoading) {
          return <Loader />; 
      }
  

    return(
        <div className="content-players">
            {teams.map((team) => (
                <div key={team._id}>
                    <div className="players-container">
                        {team.players.map((players) => ( 
                            <div className="players-card" style={{backgroundColor: team.color}} key={players._id}>
                                    <img className="image-team-players" src={team.image} alt="team-player" />
                                    <div className="mini-icon-team">
                                        <img src={team.image}/> 
                                    </div>
                                        <img className="image-player" src={players.image} alt="image-player" />
                            
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Players;