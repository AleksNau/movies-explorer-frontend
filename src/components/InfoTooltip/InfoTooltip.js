import React from "react";
import "./InfoTooltip.css";
import ok from "../../images/Union.svg";
import stop from "../../images/Unionstop.svg";

const InfoTooltip = ({isOpen, onClose, statusReg}) => {
    return (
        <div className="Info-tooltip">
            <div
                className={isOpen ? `Info-tooltip__popup Info-tooltip__popup_opened ` : `Info-tooltip__popup`}
                onClick={() => {
                    onClose();
                }}
            >
                <div
                    className="Info-tooltip__conteiner"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        className="Info-tooltip__close-button"
                        onClick={onClose}
                    />
                    <img
                        src={statusReg ? ok : stop}
                        alt="логотип"
                        className="Info-tooltip__status-image"
                    />
                    <p className="Info-tooltip__title">
                        {statusReg
                            ? "Вы успешно зарегистрировались!"
                            : "Что-то пошло не так! Попробуйте ещё раз."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoTooltip;