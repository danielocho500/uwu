import React from 'react';
import { Card } from './Card';

import cat from '../../img/cute/cat.jpg';
import chubi from '../../img/cute/chubi.jpeg'
import fox from '../../img/cute/fox.jpg'
import lion from '../../img/cute/lion.jpg'
import wolf from '../../img/cute/wof.jpg'
import jk from '../../img/cute/jk.jpg'


const cards = [{
    id: 0,
    src: cat,
    msg: "La Razón por la que te pusiste malita :(",
    path: 'contenido-1'
},
{
    id: 1,
    src: chubi,
    msg: "Una Wapa",
    path: 'contenido-2'
},
{
    id: 2,
    src: lion,
    msg: 'Grrrr',
    path: 'contenido-3'
},
{
    id: 3,
    src: fox,
    msg: 'Unos wapos',
    path: 'contenido-4'
},
{
    id: 4,
    src: jk,
    msg: 'Una song de las que me mostraste que me gusto',
    path: 'contenido-5'
},
{
    id: 5,
    src: wolf,
    msg: 'uwu',
    path: 'contenido-6'
}
]

export const Home = () => {

    return (
        <>
            <h1 className='title'> Lista de contenidos UwU </h1>
            <div className='grid container'>
                {
                    cards.map(card => (
                        <Card
                            key={card.id}
                            {...card}
                        />
                    ))
                }
            </div>
        </>
    );
};
