import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './test';
import Movie from './movie';
import TestModal from './modal';
import TestRouter from './router';
import Button from './button';
import reportWebVitals from './reportWebVitals';
import TestForm from './prac_form';

ReactDOM.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
