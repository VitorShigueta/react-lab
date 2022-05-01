import axios from "axios";
import {useState, useEffect} from "react"

export function AppAxios(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/diego3g/repos')
        .then(response => {
            setRepositories(response.data);
        })
    }, [])

    return (
        <>
        <h1>Hello World!</h1>
          <ul>
            {repositories.map(repo => {
              return(
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
              );
            })
    
            }
          </ul>
        </>
      )
}