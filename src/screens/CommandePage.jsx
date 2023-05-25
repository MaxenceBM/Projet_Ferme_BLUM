import React, { useEffect, useState } from "react";
import "../style/HomePage.scss";
import "../style/CommandePage.scss";
import Button from "../Components/Button";
import axios from "axios";
import imgboeuf from "../assets/imgCommander/boeuf.jpg";
import imgboeuf2 from "../assets/imgCommander/boeuf2.jpg";
import imgboeuf3 from "../assets/imgCommander/boeuf3.jpg";
import Header from "../Components/Header.jsx";

function Commande() {
  return (
    <>
      {/* 11/05/23 */}
      <Header />
      <div>
        <div className="TitreContainerCommande">
          <h1 className="titreCommande">N'hésitez pas à prendre commande :</h1>
        </div>
        <div className="Catalogue">
          <div className="Carte">
            <div className="imgContainer">
              <img className="imgViande" src={imgboeuf} alt="Logo" />
            </div>
            <p className="détail">Détail</p>
          </div>

          <div className="Carte">
            <div className="imgContainer">
              <div className="product">
                <img
                  onClick={"addToCart()"}
                  className="imgViande"
                  src={imgboeuf2}
                  alt="Logo"
                />
              </div>
            </div>
            <p className="détail">Détail</p>
          </div>
          <div className="Carte">
            <div className="imgContainer">
              <img className="imgViande" src={imgboeuf3} alt="Logo" />
            </div>
            <p className="détail">Détail</p>
          </div>
          <div className="Carte">
            <div className="imgContainer">
              <img className="imgViande" src={imgboeuf} alt="Logo" />
            </div>
            <p className="détail">Détail</p>
          </div>
          <div className="Carte">
            <div className="imgContainer">
              <img className="imgViande" src={imgboeuf2} alt="Logo" />
            </div>
            <p className="détail">Détail</p>
          </div>
          <div className="Carte">
            <div className="imgContainer">
              <img className="imgViande" src={imgboeuf3} alt="Logo" />
            </div>
            <p className="détail">Détail</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commande;
