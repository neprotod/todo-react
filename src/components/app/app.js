import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component {
    ids = 100;
    state = {
        todoData: [
            this.createItem('Drink Coffee'),
            this.createItem('Make Awesome App'),
            this.createItem('Have a lunch')
        ]
    }

    /**
     * Create element to itemList
     * 
     * @param {string} label text
     * @return {object} element
     */
    createItem(label){
        return {
            label, 
            id: this.ids++,
            important: false
        }
    }

    /**
     * Change parameters
     * 
     * @param {*} arr array in state
     * @param {*} id  id who we want change
     * @param {*} propName prop name to change
     * @return {Array} array to push in state
     */
    toggleProperty(arr,id,propName){
        const todoData = arr.map((elem)=>{
            if(elem.id === id){
                const tmp = {...elem};
                tmp[propName] = !elem[propName];
                return tmp;
            }
            return elem;
        });

        return todoData;
    }

    deleteItem = (id) => {
        this.setState((state)=>{
            const todoData = state.todoData.filter((elem)=>{
                if(elem.id !== id)
                    return true;
                return false;
            });
            return {todoData};
        });
    }

    onToggleDone = (id) => {
        this.setState((state)=>{
            return  {
                todoData: this.toggleProperty(state.todoData,id,'done')
            }
        });
    }

    importantItem = (id) => {
        this.setState((state)=>{
            return  {
                todoData: this.toggleProperty(state.todoData,id,'important')
            }
        });
    }
    addItem = (label) => {
        const tmp = this.createItem(label);

        this.setState((state)=>({todoData: [...state.todoData, tmp]}));
    }

    render(){
        const {todoData} = this.state;
        // We can count element to head
        const doneCount = todoData
                            .filter((elem)=>elem.done)
                            .length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                </div>
                <TodoList 
                    todos={todoData} 
                    onDeleted={this.deleteItem}
                    onImportant={this.importantItem}
                    onDone={this.onToggleDone} />
                <ItemAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;