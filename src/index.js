import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>My Todo list</h1>;
}
const SearchPanel = () => {
    return <input placeholder="search" />;
}
const TodoList = () => {
    return(
        <ul>
            <li>First task</li>
            <li>Second task</li>
        </ul>
    );
}
const App = () => {
    return(
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));