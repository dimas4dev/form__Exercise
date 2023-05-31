
import Empleado from "../../assets/images/empleado.png";
import Hombre from "../../assets/images/hombre.png";
import Button from "../Button";


const Card = () => {
    return (
        <div className="card">
            <div className="icon">
                <img src={Empleado} alt="" />
                <Button>Persona Natural</Button>
            </div>
            <div className="icon">
                <img src={Hombre} alt="" />
                <Button>Persona Juridica</Button>
            </div>
        </div>
    );
};

export default Card;