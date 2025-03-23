import "./testes.css"

function Tests(){

    const imgTest = "https://cdn.nba.com/logos/nba/1610612749/global/D/logo.svg";
    //const imgTest3 = "https://i.pinimg.com/736x/3f/f3/93/3ff39318c3e396bc91497d23f47bad63.jpg"
    const imgTest2 = "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg";
    const imgTestStar = "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png";
   // const imgTestStar2 = "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png";
    //const imgRandomtest = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f50a06a8-6555-4d39-a69d-54c3969d37c2/dhcz7jg-9c7d8ccf-578d-4c68-8838-fce6d2580513.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1MGEwNmE4LTY1NTUtNGQzOS1hNjlkLTU0YzM5NjlkMzdjMlwvZGhjejdqZy05YzdkOGNjZi01NzhkLTRjNjgtODgzOC1mY2U2ZDI1ODA1MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QL438gyB3X6WGJN8lkhvmdW3yPqR1GdLSvR9rvJwouc"

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
               <div className="subcard-overlay-test5" style={{backgroundImage: `url(${imgTestStar})`}}>

                <div className="card-overlay-test5">

                <div className="team-img-card-overlay-tests5">
                 <img className="img-card-overlay-test5" src={imgTest} alt="imgtest2" />
                </div>

                    <div className="card-overlay-test5-stats">
                        
                        <div className="stats-test5">
                            <span className="title-stats-test5">ppg</span>
                            <span className="value-stats-test5 ppg">10.8</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">apg</span>
                            <span className="value-stats-test5">1.4</span>
                        </div>
                        <div className="stats-test5">
                            <span className="title-stats-test5">rpg</span>
                            <span className="value-stats-test5">2.6</span>
                        </div>
                    </div>
                </div>
    
               </div>
            </div>

        </div>
    );
}

export default Tests;