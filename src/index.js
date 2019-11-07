import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>My Todo list</h1>
        <input placeholder="search" />

        <ul>
            <li>First task</li>
            <li>Second task</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.getElementById('root'));