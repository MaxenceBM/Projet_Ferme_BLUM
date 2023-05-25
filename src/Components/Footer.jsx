import React from "react";
import "../Components/style/Footer.scss";
// import "../Components/style/normalize.scss";
import "../Components/style/icon.scss";

import { faHome, faHouse, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "../assets/facebook.svg";

function ff() {
  return (
    <>
      <div className="container-footer">
        <div className="container-foot">
          <div className="left-footer">
            <h1 className="TITRE-Footer">FERME BLUM</h1>
            <p className="text">
              13, Rue de la Division Leclerc
              <br />
              67120 DORLISHEIM
            </p>
          </div>
          <div className="center-footer">
            <h1 className="Titre-Footer">Contactez-nous :</h1>
            <ul>
              <li className="text">06.81.99.92.19</li>
              <li className="text">blumvitielevage@yahoo.fr</li>
            </ul>
          </div>
          <div className="right-footer">
            <h1 className="Titre-Footer">Suivez-nous sur :</h1>
            <ul>
              <li className="text">
                <img className="icon" src={facebook} alt="Logo" />
                <a className="text" href="https://www.facebook.com/LaFermeBlum/">
                  La Ferme BLUM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ff;
