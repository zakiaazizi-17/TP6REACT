import { useState, useEffect, useRef } from 'react';

export default function Chronometer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const pauseTimer = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'monospace' }}>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        ⏱️ {formatTime(elapsedTime)}
      </div>
      <div>
        <button onClick={startTimer} disabled={isActive} style={buttonStyle}>
          ▶ Démarrer
        </button>
        <button onClick={pauseTimer} disabled={!isActive} style={buttonStyle}>
          ⏸ Pause
        </button>
        <button onClick={resetTimer} style={buttonStyle}>
          🔄 Réinitialiser
        </button>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        {isActive ? 'Chronomètre en cours...' : 'Chronomètre arrêté'}
      </p>
    </div>
  );
}

const buttonStyle = {
  margin: '0 0.5rem',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '#f5f5f5',
  transition: 'background-color 0.2s',
};