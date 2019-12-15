import React from 'react';

import './app-header.css'
import pencil from './18-512-small.png'

const AppHeader = ({toDo, done}) => {
    return (
      <div className="app-header d-flex">
        <h1 id="pencil-container">
          Todo List
          <img alt="pencil" id="pencil" src={pencil} />
        </h1>
        <h2>{toDo} more to do, {done} done</h2>
      </div>
    );
  };

export default AppHeader;