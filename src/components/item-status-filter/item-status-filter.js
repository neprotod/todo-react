import React, { Component } from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component{
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];


  render(){
    const {changeMark, mark} = this.props;

    const buttons = this.buttons.map(({name, label})=>{
      const isActive = mark === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary' ;
      return (
        <button key={name} type="button"
                className={`btn ${clazz}`}
                onClick={()=>{changeMark(name)}}>{label}</button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};

export default ItemStatusFilter;