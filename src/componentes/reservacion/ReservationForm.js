import React from 'react';

function ReservationForm() {
  const cambiarEstiloFondo = () => {
    // Código para cambiar el estilo de fondo
  };

  const cambiarEstiloTexto = () => {
    // Código para cambiar el estilo de texto
  };

  const restaurarEstilos = () => {
    // Código para restaurar los estilos
  };

  const reservarVuelo = () => {
    // Código para reservar vuelo
  };

  return (
    <form>
      <div className="style-buttons">
        <button onClick={cambiarEstiloFondo}>Cambiar Fondo</button>
        <button onClick={cambiarEstiloTexto}>Cambiar Texto</button>
        <button onClick={restaurarEstilos}>Restaurar Estilos</button>
      </div>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />
      <label htmlFor="Origen">Origen:</label>
      <select id="Origen" name="Origen">
        <option value="Origen">Manizales</option>
        <option value="Origen2">Medellín</option>
        <option value="Origen3">Bogota</option>
      </select>
      <label htmlFor="destino">Destino:</label>
      <select id="destino" name="destino">
        <option value="destino1">Manizales</option>
        <option value="destino2">Medellín</option>
        <option value="destino3">Bogota</option>
      </select>
      <label htmlFor="fecha ida">Fecha de Ida:</label>
      <input type="date" id="fecha ida" name="fecha ida" />
      <label htmlFor="fecha regreso">Fecha regreso:</label>
      <input type="date" id="fecha regreso" name="fecha regreso" />
      <button onClick={reservarVuelo}>Reservar Vuelo</button>
    </form>
  );
}

export default ReservationForm;
