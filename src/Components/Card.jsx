import React from "react";
import "../Components/style/Header.scss";
import "../Components/style/normalize.scss";
import imgboeuf from "../assets/imgCommander/boeuf.jpg";
import imgboeuf2 from "../assets/imgCommander/boeuf2.jpg";
import imgboeuf3 from "../assets/imgCommander/boeuf3.jpg";
import Button from "./Button";

function Card(props) {
  return (
    <>
      <img className="imgViande" src={imgboeuf} alt="Logo" />
    <ul>
        <li onClick={Button}>Price</li>
        <li>Detail</li>
        <li>Ajouter</li>


    </ul>
    
    </>
  );
}

export default Card;
