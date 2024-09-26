import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { CounterApp } from './CounterApp';
import './styles.css';
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <FirstApp title = 'El titulo' subtitle = 'El subtitulo' />
//     </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = { 0 } />
    </React.StrictMode>
);