import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{
    submitForm = (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const value = input.value;
        input.value = '';

        this.props.onAdd(value);
    }
    render(){
        // const {onAdd} = this.props;
        return (
            <form className="item-add-form d-flex" onSubmit={this.submitForm}>
                <input 
                    className="form-control" 
                    type="text"
                    placeholder="What needs to be done"/>
                <button className="btn btn-outline-secondary">Add item</button>
            </form>
        )
    }
}