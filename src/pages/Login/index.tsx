import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from "react-router-dom";


import Input from "../../components/Input";
import Button from "../../components/Button";

import LogoEnterprise from "../../assets/images/logo_bia.png";
import Modal from "../../components/Modal";
import Card from "../../components/Card";



interface LoginProps {
    onLogin: () => void;
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, openModal, setOpenModal }) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [captchaValue, setCaptchaValue] = useState("");
    const navigate = useNavigate();



    const handleEmailChange = (value: string) => {
        setEmailValue(value);
    };

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value || "");
    };

    const handlePasswordChange = (value: string) => {
        setPasswordValue(value);
    };

    const [errorGeneral, setError] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        if (captchaValue) {
            try {
                const response = await fetch('http://localhost:3000/users');
                const users = await response.json();
                const user = users.find((u: any) => u.username === emailValue && u.password === passwordValue);

                if (user) {
                    setError('');
                    onLogin();
                } else {
                    setError('Invalid username or password');
                }
            } catch (error) {
                setError(`Error occurred during login ${errorGeneral}`);
            }
        }
        else {
            console.error('captcha is not valid');

        }


    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleRedirect = () => {
        navigate("/Home");
    };

    return (
        <>
            <Modal isOpen={openModal} onClose={handleCloseModal} ><Card /></Modal>
            <div className="Login">

                <div className="Login__Form">

                    <div className="Login__Form__Header">
                        <img className="Login__Form__Header__Icon" src={LogoEnterprise} alt="" />
                    </div>

                    <form className="Login__Form__SingIn" onSubmit={handleLogin}>

                        <Input
                            value={emailValue}
                            onChange={handleEmailChange}
                            type="email"
                            placeholder="Ingresa tu email"
                            label="Email"
                        />
                        <Input
                            value={passwordValue}
                            onChange={handlePasswordChange}
                            type="password"
                            placeholder="Ingresa tu Password"
                            label="Password"
                        />
                        <ReCAPTCHA
                            sitekey="6LfKHFMmAAAAAH3oV9y-UmARzdgam-VjXgbEOnXe"
                            onChange={handleCaptchaChange}
                        />

                        <Button className="button" type="submit">Ingresar</Button>
                    </form>

                    <form className="Login__Form__SingUp">
                        <div className="Login__">
                            <h3>Bienvenido</h3>
                            <p>
                                Este es nuestro portal de trámites en linea un sistema fácil de usar, ágil y sencillo para el control general
                                de solicitudes y requerimientos ambientales en el departamento del Meta.
                            </p>
                        </div>

                        <button className="button" onClick={handleRedirect}>Registrarse</button>

                        <p>
                            Si tiene algún reclamo o solicitud, ingrese a PQR en línea Número de atención: Linea nacional 01-8000-51847095
                            Email: <a href="mailto:pqrds@cormacarena.gov.co">pqrds@cormacarena.gov.co</a>
                        </p>
                    </form>
                </div>




            </div>
        </>
    );
}

export default Login;
