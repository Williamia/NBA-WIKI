import "./testes.css"

function Tests(){

    const imgTest = "https://cdn.nba.com/logos/nba/1610612749/global/D/logo.svg";
    const imgTest2 = "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg";
    const imgTestStar = "https://imgs.search.brave.com/jcjIOSQMTH3Vf6pgu_hGI4tjlxhIKVNeCsM4BbohkGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Vi/ZWZmOTk4LWJjNDUt/NGQzNC1iYzJlLTU2/Y2VmMDJmYmI3My9k/YWx4am95LWVmZjcz/ZWMyLTZiOGItNDFk/YS1iZmIxLTRjNTI3/ZGNmZmQ4NS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/MlZpWldabU9UazRM/V0pqTkRVdE5HUXpO/QzFpWXpKbExUVTJZ/MlZtTURKbVltSTNN/MXd2WkdGc2VHcHZl/UzFsWm1ZM00yVmpN/aTAyWWpoaUxUUXha/R0V0WW1aaU1TMDBZ/elV5TjJSalptWmtP/RFV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuQUZoM09jSDdN/ak5RaTRoTUlqenFt/S3BlV2I4aFpWejJI/OEQ3VkNfX3JKNA";
    const imgTestStar2 = "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png";
    const imgRandomtest = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f50a06a8-6555-4d39-a69d-54c3969d37c2/dhcz7jg-9c7d8ccf-578d-4c68-8838-fce6d2580513.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1MGEwNmE4LTY1NTUtNGQzOS1hNjlkLTU0YzM5NjlkMzdjMlwvZGhjejdqZy05YzdkOGNjZi01NzhkLTRjNjgtODgzOC1mY2U2ZDI1ODA1MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QL438gyB3X6WGJN8lkhvmdW3yPqR1GdLSvR9rvJwouc"

    return(
        <div className="content-testspage">
           

            <div className="card-test2">
                <div className="subcard-test2">
                <div className="header-test-card2">
                <div className="icon-team-test-card2">
                    <img src={imgTest} alt="apu" />
                </div>
                <div className="title-test-card2">
                    <span>34</span>
                </div>
                </div>

            <div className="card-name-player2">
                    <span className="span-name2">Giannis</span>
                    <span className="span-subname2">Antetokounmpo</span>
            </div>
                </div>
            </div>


            <div className="card-test4">
            <div className="subcard-test4">
                <div className="header-test-card4">
                <div className="title-test-card4 emblema-one-regular">
                    <span>23</span>
                </div>
                </div>

            <div className="card-name-player4">
                    <span className="span-name4">Lebron</span>
                    <span className="span-subname4">James</span>
            </div>
                </div>
               <div className="subcard-overlay-test4">
               <img className="img-card-overlay-test4" src={imgTest2} alt="imgtest2" />
                <div className="card-overlay-test4">
                    <div className="card-overlay-test4-stats">
                        <div className="stats-test4">
                            <span>country</span> <span>usa</span>
                        </div>
                        <div className="stats-test4">
                            <span>ppg</span> <span>25</span>
                        </div>
                        <div className="stats-test4">
                            <span>apg </span> <span>8.5</span>
                        </div>
                        <div className="stats-test4">
                            <span>rpg </span> <span>8.2</span>
                        </div>
                    </div>
                </div>
                <div className="info-star-player">
                    <div className="img-star-player" style={{backgroundImage: `url(${imgTestStar})`}} />
                    <span className="number-star-player">Forward</span>
                </div>
               </div>
            </div>



            <div className="card-test5">
            <div className="subcard-test5">
                <div className="header-test-card5">
                <div className="title-test-card5 emblema-one-regular">
                    <span>23</span>
                </div>
                </div>

            <div className="card-name-player5">
                    <span className="span-name5">Lebron</span>
                    <span className="span-subname5">James</span>
            </div>
                </div>
               <div className="subcard-overlay-test5" style={{backgroundImage: `url(${imgTestStar})`}}>

                <div className="card-overlay-test5">

                <div className="team-img-card-overlay-tests5">
                 <img className="img-card-overlay-test5" src={imgTest2} alt="imgtest2" />
                </div>

                    <div className="card-overlay-test5-stats">
                        <div className="stats-test5">
                           <span className="title-stats-test5">OVR</span>
                           <span className="value-stats-test5">99</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">ppg</span>
                            <span className="value-stats-test5">10</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">apg</span>
                            <span className="value-stats-test5">20</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">rpg</span>
                            <span className="value-stats-test5">30</span>
                        </div>
                    </div>
                </div>
    
               </div>
            </div>


            <div className="card-test6">
            <div className="subcard-test6">
                <div className="header-test-card5">
                <div className="title-test-card5 emblema-one-regular">
                    <span>34</span>
                </div>
                </div>

            <div className="card-name-player5">
                    <span className="span-name5">Giannis</span>
                    <span className="span-subname5">Antetokounmpo</span>
            </div>
                </div>
               <div className="subcard-overlay-test5" style={{backgroundImage: `url(${imgRandomtest})`}}>

                <div className="card-overlay-test5">

                <div className="team-img-card-overlay-tests5">
                 <img className="img-card-overlay-test5" src={imgTest} alt="imgtest2" />
                </div>

                    <div className="card-overlay-test5-stats">
                        <div className="stats-test5">
                           <span className="title-stats-test5">OVR</span>
                           <span className="value-stats-test5">99</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">ppg</span>
                            <span className="value-stats-test5">10</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">apg</span>
                            <span className="value-stats-test5">20</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">rpg</span>
                            <span className="value-stats-test5">30</span>
                        </div>
                    </div>
                </div>
    
               </div>
            </div>

        </div>
    );
}

export default Tests;