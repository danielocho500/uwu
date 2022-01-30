import React from 'react';
import './Cont_one.css';
import arrow from '../../img/arrow.svg';
import { useNavigate } from 'react-router-dom';
import gr from '../../audio/grrr.m4a';
import grmp3 from '../../audio/grrr.mp3';

export const Cont_tres = () => {

    const navigation = useNavigate();


    const back = (e) => {
        e.preventDefault();
        navigation(-1)
    }

    return (
      <>
        <div className='arrow'>
            <img src={arrow} className="arrow-img" onClick={back}/>
        </div>

        <h3 className='title__audio'> Ojito, no te vayas a espantar</h3>

        <div className="audio__container">
          <audio controls>
            <source src={gr} type="audio/m4a"/>
            <source src={grmp3} type="audio/mp3"/>
          </audio>
        </div>
      </>
    );
};