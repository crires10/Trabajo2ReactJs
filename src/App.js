import React, { useState } from 'react';
import './styles.css'; // Se importan los estilos CSS
import AuthenticatedContent from './componentes/autenticacion/Registro';
import GoogleAuth from './componentes/google/GoogleAuth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const responseGoogleSuccess = (response) => {
    console.log(response);
    setIsAuthenticated(true);
  };

  const responseGoogleFailure = (response) => {
    console.log(response);
    if (response.error=="popup_closed_by_user") {
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        // Mostrar la autenticación con Google si no está autenticado
        <GoogleAuth onSuccess={responseGoogleSuccess} onFailure={responseGoogleFailure} />
      ) : (
        // Mostrar el contenido de la aplicación después de iniciar sesión
        <AuthenticatedContent />
      )}
    </div>
  );
}

export default App;
