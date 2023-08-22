import React from 'react';
import footerlogo from "./img/footerlogo.png";

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="footer">
                    <img className="footer_img" src={footerlogo}/>
                    <div className="footerbox">
                        <p className="bloc_p"> Единый колл центр </p>
                        <h3 className="footer_h3"> +998 90 900 00 00 </h3>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default Footer;