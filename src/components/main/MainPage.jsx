import React from 'react';
import Swal from 'sweetalert2'

import './main.css'
import fox from '../../img/fox.png';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const pistas = ["Es una definición de tu persona", "2 palabras, van juntas"
    ,"En la mitología griega se refiere a Éter", "Es una deidad", "Destaca enormemente por sus extraordinarias cualidades",
    "Tiene gran valor moral, curiosidad científica y percepción artística", "Si te cansas dile a rossell y te la va a decir jsk",
    "Diosa","Eterea"]

export const MainPage = () => {

    const [values, handleInputChange] = useForm({
        usuario: '',
        clave: ''
    })

    const {usuario, clave} = values;

    const navigation = useNavigate();

    const handleInputSubmit = (e) => {
        e.preventDefault();
        
        if(usuario.trim() === ''){
            Swal.fire('¿Tas bien?', 'Debes poner un usuario','question');
            return;
        }
        if(clave.trim() === ''){
            Swal.fire('Echale ganas', 'Debes poner una contraseña grr', 'question');
            return;
        }
        if(usuario !== 'DailiUwU'){
            Swal.fire(':(', 'Usuario incorrecto','error');
            return;
        }
        if(clave.toLowerCase() !== 'diosaetérea' || clave.toLowerCase() !== 'diosaetérea'){
            const randomElement = pistas[Math.floor(Math.random() * pistas.length)]
            Swal.fire(':(', 'Pista de la clave: '+randomElement,'error');
            return;
        }

        Swal.fire({
            title: '¿Eres una persona sexy?',
            text: 'Necesitamos confirmar que eres Daili',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yessir',
            cancelButtonText: 'nope :c'
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire('Grrrrr','Hemos Confirmado que eres Daili','success');
                navigation('/home')
            }
            else{
                Swal.fire('quien sos?','Hemos detectado que no eres daili','warning');
            }
        });

    }

    return (
        <div className='container'>
            <div className="login">
                <div className="logo">
                    <img src={fox} className='logo__img'/>
                </div>   

                <form className='form mt-5' onSubmit={handleInputSubmit}>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Usuario'
                        name='usuario'
                        value={usuario}
                        onChange={handleInputChange}
                    />

                    <input
                        type='password'
                        className='form-control mt-3'
                        placeholder='Clave'
                        name='clave'
                        value={clave}
                        onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                        className='btn btn-primary mt-3'
                    > Continuar </button>
                </form>
            </div>
        </div>
    )
};
