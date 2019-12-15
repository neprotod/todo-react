import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{
    render() {
        const { label, important = false, onDeleted, onImportant, onDone, done } = this.props;


        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        
        let className = 'todo-list-item';
        if (done){
            className += ' done';
        }

        return (
            <span className={className}>
                <span onClick={onDone} className="todo-list-item-label" style={style}>
                    {label}
                </span>
        
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onImportant}>
                    <i className="fa fa-exclamation" />
                </button>
        
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}