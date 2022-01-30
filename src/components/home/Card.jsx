import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'

export const Card = ({src,msg, path}) => {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate(path);
    }

    return (
        <>
            <div className='card'>
                <img src={src} alt={msg} className="card-img-top card__img"/>
                <div className="card-body">
                    <p className='card-text'> {msg} </p>
                    <button 
                        className='btn btn-primary'
                        onClick={handleClick}
                    >
                        Aberrr
                    </button>
                </div>
            </div>

        </>
    );
};
