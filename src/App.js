import logo from './logo.svg';
import './App.css';

function App() {
  const players = [
    {name: "Messi", position: "AMF", club: "PSG"},
    {name: "Ronaldo", position: "CF", club: "Real Madrid"},
    {name: "Haaland", position: "CF", club: "Dortmund"},
    {name: "Neymar", position: "LWF", club: "Barcelona"}

  ]
  
  return (
    <div className="App">
     {players.map(player => <Player name = {player.name} position= {player.position} club= {player.club}></Player>)}
    </div>
  );
}

function Player(props) {
  console.log(props)
  const messiStyle = {
    color: 'white',
    backgroundColor: 'hotpink',
    border: '2px solid blue',
    margin: "10px",
    borderRadius: "10px"
  }
  return (
    <div style={messiStyle}>
      <h2>{props.name}</h2>
      <h3>Club: {props.club}</h3>
      <h3>Position: {props.position}</h3>
    </div>
  );
}

export default App;
