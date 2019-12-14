import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{
    state = {
        done: false
    }

    onLabelClick = () => {
        this.setState((state) =>({
            done: !state.done
        }));
    }

    render() {
        const { label, important = false, onDeleted } = this.props;
        const {done} = this.state;


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
                <span onClick={this.onLabelClick} className="todo-list-item-label" style={style}>
                    {label}
                </span>
        
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right">
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