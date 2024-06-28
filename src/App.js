import logo from "./logo.svg";
import "./App.css";
function App() {
  const user = {
    nom: "Doe",
    prenom: "John",
  };
  const tasks = ["Réviser JavaScript", "Apprendre React", "Préparer le repas"];
  const tasklist = [];
  let key = 0;
  for (let task of tasks) {
    key++;
    tasklist.push(<li key={key}>{task}</li>);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Bonjour {user.prenom} {user.nom}
        </h1>
      </header>
      <main className="App-main">
        <h2>Découvrons ensemble la librairie React !</h2>
        <p>
          Éditez <code>src/App.js</code> et sauvegardez pour recharger.
        </p>
        <h3>Ma TODO list</h3>
        <ul>{tasklist}</ul>
      </main>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutoriels React
        </a>
      </footer>
    </div>
  );
}

export default App;
