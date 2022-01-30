import React from 'react';
import './Cont_one.css';
import arrow from '../../img/arrow.svg';
import { useNavigate } from 'react-router-dom';

import wapos from '../../img/dai/togheter.jpeg';
import perfil from '../../img/dai/perfil.jpeg';
import pelos from '../../img/dai/Pelosss.jpeg';
import arwen from '../../img/dai/arwen.jpeg';

import like from '../../img/like.svg';
import share from '../../img/share.svg';
import comment from '../../img/comment.svg';

export const Cont_cuatro = () => {

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
              <img src={pelos} className="img__perfil"/>
            </div>

            <p> RusbeltUwU </p>
            <p> - Siguiendo </p>
          </div>

          <div className="post__img">
            <img src={wapos} className="img__post"/>
          </div>

          <div className="post__content">
            <div className="flex__comments">
                <div className="comment">
                  <div className="perfil__img">
                    <img src={pelos} className="img__perfil"/>
                  </div>

                  <p> <b> RusbeltUwU  </b> </p>
                  <p> Solo gente sexy aparece en esta foto 😈 </p>
                </div>

                <div className="comment">
                  <div className="perfil__img">
                    <img src={perfil} className="img__perfil"/>
                  </div>

                  <p> <b> DailiUwU  </b> </p>
                  <p> Presenten a la de la izquierda </p>
                </div>

                <div className="comment">
                  <div className="perfil__img">
                    <img src={arwen} className="img__perfil"/>
                  </div>

                  <p> <b> Arwen  </b> </p>
                  <p> Miau 😺 </p>
                </div>
            </div>

            <div className="social">
              <div className="images">
                <img src={like}/>
                <img src={comment}/>
                <img src={share}/>

              </div>

              <div className="likes">
                <p> Le gusta a Lebron James y 1,034 personas más</p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
};