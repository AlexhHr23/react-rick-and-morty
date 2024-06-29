import { useEffect, useState } from "react";

function App() {

  const [character, setcharacter] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(data.results);
    }

    fetchData()
  }, []);

  return <div>Hello world</div>;
}

export default App;
