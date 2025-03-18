import { useEffect, useState } from "react";
import axios from "axios";

function Api(){
    const[data, setData] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000")
        .then(response => setData(response.data.message))
        .catch(error => console.error("Error ao buscar na API", error));
    }, []);


    return (
        <div>
            <h2>Teste API</h2>
            <p>{data || "carregando..."}</p>
        </div>
    )
}

export default Api;
