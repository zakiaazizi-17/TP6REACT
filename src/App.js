import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div>
      <h1>TP Hooks Avancés – Niveau Débutant</h1>
      <h2>Compteur avec useReducer</h2>
      <Compteur />
      <h2>Mettre le focus avec useRef</h2>
      <FocusInput />
      <h2>Compteur de rendus</h2>
      <CompteurRendu />
      <h2>Liste d’articles avec useFetch</h2>
      <ListeArticles />
      <h2>Timer avec nettoyage d’effet</h2>
      <Timer />
    </div>
  );
}

export default App;