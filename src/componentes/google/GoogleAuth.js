import React from 'react';
import { GoogleLogin } from 'react-google-login';

function GoogleAuth({ onSuccess, onFailure }) {
  return (
    <div>
      <header>
        <h1>Aerolínea Destinoss</h1>
        <p>Desarrollado por Cristofer Restrepo</p>
      </header>

      <main id="miFormularioVuelo">
        <div className="flight-card">
          <div className="flight-details">
            <img src="https://media.istockphoto.com/id/1453256961/es/foto/vista-a%C3%A9rea-del-paisaje-urbano-moderno-de-bogot%C3%A1-en-colombia-por-la-tarde.jpg?s=1024x1024&w=is&k=20&c=6WidWa6yjoIuppOsqMFxDxAAqah8yb6sviKU6edaCk0=" alt="Vuelo a Destino 3" />
            <br></br>
            <div style={{ textAlign: 'center' }}>
              <GoogleLogin
                clientId="149899760449-54chtc65em7fgjve7eggru2dparic6f8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Trabajo desarrollo de software 2. Todos los derechos reservados.</p>
        <p><a href="https://github.com/crires10/proyecto-cristofer">Enlace GITHUB</a></p>
      </footer>
    </div>
  );
}

export default GoogleAuth;
