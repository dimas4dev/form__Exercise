import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import RegisterForm from "../../components/RegisterForm";

const Home = () => {
  const [tipoPersona, setTipoPersona] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState(0);
  const [showDiv, setShowDiv] = useState(false);
  const navigate = useNavigate();



  const handleTipoPersonaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoPersona(event.target.value);
  };

  const handleTipoDocumentoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoDocumento(event.target.value);
  };

  const handleNumeroDocumentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroDocumento(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (tipoPersona && tipoDocumento && numeroDocumento) {
      setShowDiv(true);
    }

    console.log("Rellenar los campos requeridos");


  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <form className="Home" onSubmit={handleSubmit}>
        <div className="Home__Select">
          <label htmlFor="tipoPersona">Tipo de Persona:</label>
          <select id="tipoPersona" value={tipoPersona} onChange={handleTipoPersonaChange}>
            <option value="">Seleccionar</option>
            <option value="natural">Natural</option>
            <option value="juridica">Jurídica</option>
          </select>
        </div>
        <div className="Home__Select">
          <label htmlFor="tipoDocumento">Tipo de Documento:</label>
          <select id="tipoDocumento" value={tipoDocumento} onChange={handleTipoDocumentoChange}>
            <option value="">Seleccionar</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="ti">Tarjeta de Identidad</option>
            <option value="ce">Cédula de Extranjería</option>
          </select>
        </div>
        <div className="Home__Input">
          <label htmlFor="numeroDocumento">Número de Documento:</label>
          <input
            id="numeroDocumento"
            type="number"
            value={numeroDocumento}
            onChange={handleNumeroDocumentoChange}
          />
        </div>
        <button type="submit">Buscar</button>
        <button onClick={handleRedirect} >Volver</button>
      </form>

      {showDiv && <RegisterForm numberDocument={numeroDocumento} typeDocument={tipoDocumento} personType={tipoPersona} />}
    </>
  );
};

export default Home;
