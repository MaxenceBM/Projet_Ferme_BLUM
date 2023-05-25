import "../style/HomePage.scss";
// import Button from "../Components/Button";
// import { Link } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Titre from "../assets/titreMenu.svg";
import Savoirplus from "../screens/EnSavoirPlus";
import Contact from "../screens/Contact";
import Footer from "../Components/Footer";
import React, { useState } from 'react';

// SWIPER CARROUSEL

// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Pagination } from "swiper";
import "../style/swiper.scss";

export default function App() {

  return (
    <>
      <Header />

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      ><div className="TitreContainer">
        <img className="hidden-image" src={Titre} alt="Logo" /></div>
        <SwiperSlide className="backround1"></SwiperSlide>
        <SwiperSlide className="backround2"></SwiperSlide>
        <SwiperSlide className="backround3"> </SwiperSlide>
        <SwiperSlide className="backround4"> </SwiperSlide>
      </Swiper>

      {/* DEUXIEME PARTIE HOME PAGE */}

      <div className="questionContainer">
        <p className="hidden-parahome">Vous souhaitez découvrir l’univers de la Ferme Blum ?</p>
        <p className="hidden-parahome">Vous souhaitez découvrir une viande charolaise d’exception ?</p>
        <p className="hidden-parahome">
          Vous trouverze chez nous une viande réputée pour sa tendrté, sa
          finesse et sa couleur rouge franc.
        </p>
      </div>

      <Savoirplus />
      <Contact />
      <Footer />
    </>
  );
}
