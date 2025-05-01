import React from 'react';
import axios from 'axios';

function App() {
  // Estilos en línea
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '15px 32px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease-in-out', // Agregamos transición para hover
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra del botón
    },
    buttonHover: {
      backgroundColor: '#45a049', // Cambia el color de fondo al hacer hover
      transform: 'scale(1.1)',  // Aumenta el tamaño del botón
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
  };

  // Función para descargar el PDF
  const handleDownload = () => {
    axios.get('http://localhost:5000/factura', { params: { nombre: 'Carlos' } })
      .then(response => {
        const file = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch(error => console.log(error));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Generar Factura</h1>
      <button 
        style={styles.button} 
        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        onClick={handleDownload}
        onMouseEnter={(e) => e.target.style.transform = styles.buttonHover.transform} 
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // Regresa al tamaño original al quitar el mouse
      >
        Descargar Factura
      </button>
    </div>
  );
}

export default App;




