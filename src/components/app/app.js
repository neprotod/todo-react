import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../item-status-filter';
import TodoList from '../todo-list';

import './app.css';

class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    }

    deleteItem = (id) => {
        
        this.setState((state)=>{
            const todoData = state.todoData.filter((elem)=>{
                if(elem.id !== id)
                    return elem;
                return false;
            });
            return {todoData};
        });
    }

    render(){
        const {todoData} = this.state;
        return(
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                </div>
                <TodoList todos={todoData} onDeleted={this.deleteItem} />
            </div>
        );
    }
}

export default App;