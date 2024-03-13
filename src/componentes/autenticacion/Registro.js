import React from 'react';
import FlightCard from '../cards/FlightCard'; // Importa el componente de tarjeta de vuelo
import ReservationForm from '../reservacion/ReservationForm'; // Importa el componente de formulario de reserva

function Registro() {
  return (
    <div>
      <header>
        <h1>Aerolínea Destinos</h1>
        <p>Desarrollado por Cristofer Restrepo</p>
      </header>

      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Destinos</a></li>
          <li><a href="#">Reservas</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="https://github.com/crires10/proyecto-cristofer">Enlace GITHUB</a></li>
          <li><a href="#">Registrese</a></li>
          <li><a href="#">Vuelos</a></li>
        </ul>
      </nav>

      <main id="miFormularioVuelo">
        <FlightCard title="Manizales - Medellin" imageSrc="https://cdn.britannica.com/66/139866-050-7F8A5FC6/Manizales-Colom.jpg" date="Vuela el 11 de marzo de 2024" duration="Duración: 1 horas" price="Precio desde $150.000" />
        <FlightCard title="Medellin - Manizales" imageSrc="https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2020%2F09%2FMedell%C3%ADn-foto-ProColombia.jpg%3Fv%3D20471365&w=3840&q=75" date="Vuela el 29 de febrero de 2024" duration="Duración: 1 horas" price="Precio desde $250.000" />
        <FlightCard title="Medellin - Bogota" imageSrc="https://media.istockphoto.com/id/1453256961/es/foto/vista-a%C3%A9rea-del-paisaje-urbano-moderno-de-bogot%C3%A1-en-colombia-por-la-tarde.jpg?s=1024x1024&w=is&k=20&c=6WidWa6yjoIuppOsqMFxDxAAqah8yb6sviKU6edaCk0=" date="Vuela el 27 de febrero de 2024" duration="Duración: 1.5 horas" price="Precio desde $180.000" />
        <ReservationForm />
      </main>

      <footer>
        <p>&copy; 2024 Trabajo desarrollo de software 2. Todos los derechos reservados.</p>
        <p><a href="https://github.com/crires10/proyecto-cristofer">Enlace GITHUB</a></p>
      </footer>
    </div>
  );
}

export default Registro;
