import React from 'react';
import './Cont_one.css';
import arrow from '../../img/arrow.svg';
import { useNavigate } from 'react-router-dom';

export const Cont_cinco = () => {

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
      <div className="unu">
        <div class="video-contenedor">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MwrAE1hFNWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
};