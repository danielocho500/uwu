import React from 'react';
import './Cont_one.css';
import arrow from '../../img/arrow.svg';
import { useNavigate } from 'react-router-dom';

import wapa from '../../img/dai/uno.jpeg';
import perfil from '../../img/dai/perfil.jpeg';
import pelos from '../../img/dai/Pelosss.jpeg';
import jk from '../../img/dai/jk.jpg';

import like from '../../img/like.svg';
import share from '../../img/share.svg';
import comment from '../../img/comment.svg';



export const Cont_two = () => {

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

        <div className="post container">
          <div className='post__name'>
            <div className="perfil__img">
              <img src={perfil} className="img__perfil"/>
            </div>

            <p> DailiUwU </p>
            <p> - Siguiendo </p>
          </div>

          <div className="post__img">
            <img src={wapa} className="img__post"/>
          </div>

          <div className="post__content">
            <div className="flex__comments">
                <div className="comment">
                  <div className="perfil__img">
                    <img src={perfil} className="img__perfil"/>
                  </div>

                  <p> <b> DailiUwU  </b> </p>
                  <p> Grrr Andamos poderosas 😈 </p>
                </div>

                <div className="comment">
                  <div className="perfil__img">
                    <img src={pelos} className="img__perfil"/>
                  </div>

                  <p> <b> Rusbelt  </b> </p>
                  <p> 😍😍😍 </p>
                </div>

                <div className="comment">
                  <div className="perfil__img">
                    <img src={jk} className="img__perfil"/>
                  </div>

                  <p> <b> abcdefghi__lmnopqrstuvwxyz  </b> </p>
                  <p> Ya no me ignotes pls </p>
                </div>
            </div>

            <div className="social">
              <div className="images">
                <img src={like}/>
                <img src={comment}/>
                <img src={share}/>

              </div>

              <div className="likes">
                <p> Le gusta a Rusbelt y 1,034 personas más</p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
};
