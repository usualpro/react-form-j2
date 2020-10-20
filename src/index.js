import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import { Application } from './Application';


const root = document.getElementById('root');
const actualDate = new Date();
ReactDOM.render(<Application propriete1={actualDate}>
    <div>
        <h3>Ceci est un titre</h3>
        <p>C'est un paragraphe</p>
    </div>
</Application>, root);