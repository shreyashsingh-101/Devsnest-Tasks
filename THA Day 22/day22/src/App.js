import "./App.css";
import Templates from "./components/Templates";
import Meme from "./components/Meme";
import { useState, useEffect } from "react";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://api.imgflip.com/get_memes");
      let data = await res.json();
      setTemplates(data.data.memes);
    })();
  }, []);

  return (
    <div className="App">
      
      <div className="heading">
        <h1>Meme Generator</h1>
      </div>
      
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
