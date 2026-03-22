import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p>Erreur : {erreur.message}</p>;

  if (!data || !Array.isArray(data)) return <p>Aucune donnée disponible.</p>;

  return (
    <ul>
      {data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;