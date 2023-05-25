import React from "react";
import "../style/Contact.scss";
import VacheContact from "../assets/cowContact.jpg";
import Header from "../Components/Header.jsx";


function SavoirPlus() {
  return (
    <>
    <Header/>
      <div className="ContainerAll">
        <img className="image-contact" src={VacheContact} alt="tracteur" />

        {/* NOUS CONTACTER */}

        <contact className="All">
          <h1 className="titreContact">Nous contacter :</h1>
          <div className="containerContact">
            <input
              className="textContact"
              type="text"
              placeholder="GG"
              id="Objet"
              name="Nom"
              placeholder="Objet : "
            ></input>
            <input
              className="textContact"
              type="text"
              id="Objet"
              name="Nom"
              placeholder="Nom :"
            ></input>
            <input
              className="textContact"
              type="text"
              id="Objet"
              name="Nom"
              placeholder="Prénom :"
            ></input>
            <input
              className="textContact"
              type="text"
              id="Objet"
              name="Nom"
              placeholder="Email :"
            ></input>
            <input
              className="message"
              type="text"
              id="Objet"
              name="Nom"
              placeholder="Message :"
            ></input>
            <div className="containerButton">
              <button className="buttonEnvoyer">envoyer</button>
            </div>
            
          </div>
        </contact>
      </div>
    </>
  );
}

export default SavoirPlus;
