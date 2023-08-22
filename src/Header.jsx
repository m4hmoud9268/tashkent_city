import React from 'react';
import logo from "./img/header logo.png";
import fon from "./img/fon.jpg";

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="headerbox">
                    <img className="logo" src={logo}/>
                </div>
                <div className="menu">
                    <ul>
                        <li>жилые комплексы</li>
                        <li>о компании</li>
                        <li> Контакты</li>
                        <li> Новости </li>
                        <li>Акции</li>
                        <li>Преимущество</li>
                    </ul>
                </div>

                <img className="fon" src={fon}/>
            </div>
        </div>
    );
};

export default Header;