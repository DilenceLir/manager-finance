import "./button.scss"
import plus from "../../assets/img/plus.svg";
import minus from "../../assets/img/minus.svg";


const Buttons = () => {
    return (
        <div className="button">
            <a className = "button__minus">
                <img src={minus} alt="" />
            </a>
            <a className = "button__plus">
            <img src={plus} alt="" />
            </a>
        </div>
    )
};

export default Buttons;