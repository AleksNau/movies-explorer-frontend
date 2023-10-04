import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Main from "../Main/Main";

const Landing = () => {
    return (
        <Main>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </Main>
    );
};

export default Landing;