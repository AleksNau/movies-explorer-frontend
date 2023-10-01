import React from "react";
import "./PageWithForm.css";
import {useForm} from "react-hook-form";
import logo from "../../images/logo.svg";
import {useNavigate} from "react-router-dom";

const PageWithForm = ({title, buttonTitle, children, subtitle, linkText, link, onSubmit}) => {

    const navigate = useNavigate();

    const {
        handleSubmit,
        formState: {isValid},
    } = useForm({mode: "onChange"});

    return (<>
            <img src={logo} alt="логотип" className="form__logo" onClick={() => {
                navigate("/")
            }}/>
            <form
                onSubmit={
                    handleSubmit(onSubmit)
                }
                name={`sign-up-form`}
                className={`form`}
                id={`sign-up-form`}
                method="post"
            >
                <fieldset className="form__fieldset">
                    <legend className="form__title">{title}</legend>
                    {children}
                    <button
                        type="submit"
                        className="form__submit"
                        disabled={!isValid}
                        form={`sign-up-form`}
                        value={buttonTitle}
                    >
                        {buttonTitle}
                    </button>
                    <p className="form__question">{subtitle} <a href={link} className="form__link">{linkText}</a></p>
                </fieldset>
            </form>
        </>
    );
};

export default PageWithForm;