import React from 'react';
import preloader from './Spinner-1s-244px.svg'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <>
            <img src={preloader} alt="Preloader" className={s.preloader}/>
        </>
    );
};

export default Preloader;