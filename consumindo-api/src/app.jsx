import {useState, useEffect} from "react"

export function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
    .then(response => response.json())
    .then(data => {setRepositories(data);
    });
  }, []);
  
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
