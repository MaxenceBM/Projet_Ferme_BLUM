import React from "react";
import "../Components/style/Header.scss";
import "../Components/style/normalize.scss";
// import { FontAwesomeIcon,   } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-scroll';


function Menu(props) {
  return (
    <>
      <header>
        <nav className="menu" role="navigation">
          <div className="inner">
            <div className="m-left">
              <a href="/" className="logo">FERME BLUM</a>
            </div>
            <div className="m-right">
              <a href="/Commande" className="m-link">
                COMMANDER
              </a>
              <a href="/EnSavoirPlus" className="m-link">
                A PROPOS
              </a>
              <a href="/Contact" className="m-link">
                CONTACTEZ-NOUS
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Menu;
