import { useRef } from 'react';
function FocusInput()
{
  
  const textFieldReference = useRef(null);

  const setFocusOnInput = () => {
    if (textFieldReference.current) {
      textFieldReference.current.focus();
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <label htmlFor="mainInput">Votre texte : </label>
      <input
        id="mainInput"
        ref={textFieldReference}
        type="text"
        placeholder="Saisissez quelque chose..."
      />
      <button onClick={setFocusOnInput} style={{ marginLeft: '0.5rem' }}>
        ⚡ Focus
      </button>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
        Cliquez sur le bouton pour donner le focus au champ ci-dessus.
      </p>
    </div>
  );
}
export default FocusInput;
