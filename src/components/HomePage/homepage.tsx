import "./homepage.css"

function HomePage(){
    return(
        <div className="content-homepage content-default-css">
            <div className="container-homepage">
                <div className="text-welcome-homepage">
                    <p className="title-welcome">welcome to nba wiki</p>
                    <p className="text-welcome">text</p>
                </div>
            </div>
            <div className="img-homepage">
                <img src={"https://imgs.search.brave.com/seJRn-gnSaDoFBEtTedMKh0AkYOCgBMR3jl1bNxrYCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmFz/a2V0YmFsbC1jb3Vy/dC1waWN0dXJlcy1t/a2NzcmtweDNrb3V6/bW8yLmpwZw"} />
            </div>
        </div>
    );
}

export default HomePage;