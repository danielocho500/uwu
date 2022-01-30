import React from 'react';
import './Cont_one.css';
import arrow from '../../img/arrow.svg';
import { useNavigate } from 'react-router-dom';

export const Cont_seis = () => {

  const navigation = useNavigate();


  const back = (e) => {
    e.preventDefault();
    navigation(-1)
  }

  return (
    <>
      <div className='arrow'>
        <img src={arrow} className="arrow-img" onClick={back} />
      </div>


      <div class="container-tulip">
        <div class="tulip">
          <div class="stem">
            <div class="tulipHead">
              <div class="tulipHair lightTulip lightTulip-1"></div>
              <div class="tulipHair darkTulip darkTulip-1"></div>
              <div class="tulipHair lightTulip lightTulip-2"></div>
              <div class="tulipHair darkTulip darkTulip-2"></div>
              <div class="tulipHair lightTulip lightTulip-3"></div>
              <div class="tulipFace">
                <div class="leftEye tulipEyes"></div>
                <div class="rightEye tulipEyes"></div>
                <div class="tulipSmile"></div>
                <div class="leftBlush tulipBlush"></div>
                <div class="rightBlush tulipBlush"></div>
              </div>
            </div>
            <div class="rightTulipLeaf tulipLeaf leaf"></div>
            <div class="leftTulipLeaf tulipLeaf leaf"></div>
            <div class="rightStemLeaf stemLeaf leaf"></div>
            <div class="leftStemLeaf stemLeaf leaf"></div>
          </div>
        </div>
        <div class="leftBabyTulip tulip">
          <div class="stem">
            <div class="tulipHead">
              <div class="tulipHair lightTulip lightTulip-1"></div>
              <div class="tulipHair darkTulip darkTulip-1"></div>
              <div class="tulipHair lightTulip lightTulip-2"></div>
              <div class="tulipHair darkTulip darkTulip-2"></div>
              <div class="tulipHair lightTulip lightTulip-3"></div>
              <div class="tulipFace">
                <div class="leftEye tulipEyes"></div>
                <div class="rightEye tulipEyes"></div>
                <div class="tulipSmile"></div>
                <div class="leftBlush tulipBlush"></div>
                <div class="rightBlush tulipBlush"></div>
              </div>
            </div>
            <div class="rightTulipLeaf tulipLeaf leaf"></div>
            <div class="leftTulipLeaf tulipLeaf leaf"></div>
            <div class="rightStemLeaf stemLeaf leaf"></div>
            <div class="leftStemLeaf stemLeaf leaf"></div>
          </div>
        </div>
        <div class="rightBabyTulip tulip">
          <div class="stem">
            <div class="tulipHead">
              <div class="tulipHair lightTulip lightTulip-1"></div>
              <div class="tulipHair darkTulip darkTulip-1"></div>
              <div class="tulipHair lightTulip lightTulip-2"></div>
              <div class="tulipHair darkTulip darkTulip-2"></div>
              <div class="tulipHair lightTulip lightTulip-3"></div>
              <div class="tulipFace">
                <div class="leftEye tulipEyes"></div>
                <div class="rightEye tulipEyes"></div>
                <div class="tulipSmile"></div>
                <div class="leftBlush tulipBlush"></div>
                <div class="rightBlush tulipBlush"></div>
              </div>
            </div>
            <div class="rightTulipLeaf tulipLeaf leaf"></div>
            <div class="leftTulipLeaf tulipLeaf leaf"></div>
            <div class="rightStemLeaf stemLeaf leaf"></div>
            <div class="leftStemLeaf stemLeaf leaf"></div>
          </div>
        </div>
      </div>

      <div>
        <p className='msg-text'>
        Oliii, te hice esta paginita con el objetivo de subirte un poco el ánimo, se que no es la gran cosa pero le eche gans jaja, te regalo unos tulipanes virtuales hechos en código puro jaja, Tqm Ojalá que andes al 100 pronto muac
        </p>
      </div>
    </>
  );
};