
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    setChargement(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setErreur(err))
      .finally(() => setChargement(false));
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;