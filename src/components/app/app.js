import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends Component {
    ids = 100;
    state = {
        todoData: [
            this.createItem('Drink Coffee'),
            this.createItem('Make Awesome App'),
            this.createItem('Have a lunch')
        ],
        filter: '',
        mark: 'all'
    }

    /**
     * 
     * @param {Array} items 
     * @param {string} name 
     */
    markItem(items, name){
        switch(name){
            case 'all':
                return items;
            case 'active':
                return items.filter((el) => !el.done);
            case 'done':
                return items.filter((el) => el.done);
            default:
                return items;
        }
    }

    /**
     * Filter element
     * 
     * @param {Array} items array
     * @param {string} filter text to filter
     * @return {Array} filtered elements
     */
    searchItem(items, filter){
        if(!filter){
            return items;
        }

        return items.filter((el)=>{
            return el.label
                .toLowerCase()
                .includes(filter.toLowerCase())});
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

    filterItem = (filter)=>{
        this.setState({
            filter
        });
    }

    changeMark = (mark) => {
        this.setState({
            mark
        });
    }

    render(){
        const {todoData, filter, mark} = this.state;
        // We can count element to head
        const doneCount = todoData
                            .filter((elem)=>elem.done)
                            .length;
        const todoCount = todoData.length - doneCount;

        const filterItem = this.markItem(
                this.searchItem(todoData, filter), 
                mark
            );

        return(
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onFilter={this.filterItem} />
                    <ItemStatusFilter 
                        changeMark={this.changeMark}
                        mark={mark} />
                </div>
                <TodoList 
                    todos={filterItem} 
                    onDeleted={this.deleteItem}
                    onImportant={this.importantItem}
                    onDone={this.onToggleDone} />
                <ItemAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;