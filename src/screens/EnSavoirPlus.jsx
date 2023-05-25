import React from "react";
import "../style/EnSavoirPlus.scss";
import { useHref } from "react-router-dom";
import image3 from "../assets/image3.png";
import tracteur from "../assets/photo.jpg";
import info1 from "../assets/friseInfo/info1.svg";
import info2 from "../assets/friseInfo/info2.svg";
import info3 from "../assets/friseInfo/info3.svg";
import info4 from "../assets/friseInfo/info4.svg";
import Header from "../Components/Header.jsx";

function SavoirPlus() {
  return (
    <>
    <Header/>
      <div className="savoirPlus">
        <div className="innerSp">
          <div className="sp-left">
            {/* LIGNE 1 */}

            <div className="ligne1">
              <p className="p1">
                <h1 className="titreSv">Découvrir notre histoire</h1>
                En reprenant la ferme en 1998, nous avons développé l'élevage,
                en installant nos bâtiments à l'extérieur du village, pour plus
                de confort pour nos animaux pendant la saison hivernale. Nous
                faisons naître nos animaux et nous les élevons dans le respect
                du bien-être.
              </p>
              <img className="imgSP" src={image3} alt="ferme" />
            </div>
          </div>

          {/* LIGNE 2 */}

          <div className="sp-right">
            <div className="ligne2">
              <img className="imgSP" src={tracteur} alt="tracteur" />
              <p className="p2">
                Depuis 3 ans, nous proposons des colis de viande direct de la
                ferme. Nous vous garantissons des produits d’une qualité
                exceptionnelle, notre viande est réputée par sa tendresse,
                finesse et couleur rouge franc !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FRISE INFO */}

      <div className="friseInfoBackground">
        <div className="containerInfo">
          <img className="imgInfo" src={info1} alt="tracteur" />
          <img className="imgInfo" src={info2} alt="tracteur" />
          <img className="imgInfo" src={info3} alt="tracteur" />
          <img className="imgInfo" src={info4} alt="tracteur" />
        </div>
      </div>
    </>
  );
}

export default SavoirPlus;
