import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Socket } from './SocketContext';
import { MyTaskbarContext } from './TaskbarContext'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    
    <MyTaskbarContext>
        <App />
        </MyTaskbarContext>    
    
    
  
);


