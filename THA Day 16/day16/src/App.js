import "./App.css";
import Card from './Card';
import Chess from './Chess';


function App() {
  return <div className="App">
   <div className="container">
     <div className="left">
      <Card name = "Seafood" image = "image.jpg"  />
      <Card name = "Spider" image = "image2.jpg"  />

     </div>
     <div className="right">
      <Chess />
     </div>

   </div>
  </div>;
}

export default App;
