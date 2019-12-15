import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{
    state = {
        input: ''
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.input);
        this.setState({input:''});
    }

    handlerInput = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    render(){
        // const {onAdd} = this.props;
        return (
            <form className="item-add-form d-flex" onSubmit={this.submitForm}>
                <input 
                    className="form-control" 
                    type="text"
                    placeholder="What needs to be done"
                    value={this.state.input}
                    onChange={this.handlerInput}/>
                <button className="btn btn-outline-secondary">Add item</button>
            </form>
        )
    }
}