import phone from '../images/phone.png';
import code from '../images/code.png';
import './SignIn.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, Link, BrowserRouter, NavLink, useNavigate, Navigate } from 'react-router-dom';


function SignIn() {
  const navigate = useNavigate();
  function goToAccount(evt) {
    evt.preventDefault();
    navigate('/account');
  }


  return (
    <>
    
      <div className='main-block'>
        <h2 className='header-p'>Личный Кабинет</h2>
        <form className='login'>
          <div className='input-field'>
            <img className='field-img' src={phone}></img>
            <input className='input phone' placeholder='Номер телефона'></input>
          </div>
          <div className='input-field'><img className='field-img' src={code}></img>
            <input className='input code' placeholder='Код из sms'></input>
          </div>
          <button className='button-signin' onClick={goToAccount}>Отправить код</button>
        </form>
      </div>
      
    </>
  );
}

export default SignIn;
