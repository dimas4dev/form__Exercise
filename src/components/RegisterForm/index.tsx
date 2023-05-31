import React, { useState } from "react";


interface RegisterFormProps {
    personType: string;
    typeDocument: string;
    numberDocument: number;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    personType,
    typeDocument,
    numberDocument,
}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Nombre:", name);
        console.log("Email:", email);
        console.log("Contraseña:", password);
    };

    return (
        <div className="RegisterForm">
            <p>Tipo de persona: {personType}</p>
            <p>Tipo de documento: {typeDocument}</p>
            <p>Número de documento: {numberDocument}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default RegisterForm;
