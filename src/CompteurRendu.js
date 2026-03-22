import { useRef, useEffect } from 'react';

 function RenderCounter() {
  
  const renderCount = useRef(0);

  useEffect(() => {
   
    renderCount.current += 1;
    console.log(`🔁 Le composant s'est rendu ${renderCount.current} fois.`);
  });

  const showCurrentCount = () => {
    console.log(`ℹ️ Nombre de rendus actuel : ${renderCount.current}`);
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>Ouvrez la console pour suivre les rendus.</p>
      <button onClick={showCurrentCount}>📊 Afficher le nombre de rendus</button>
    </div>
  );
}
export default RenderCounter;