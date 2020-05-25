import * as React from 'react';
import CardComponent from '../utility/CardComponent'

export const TodoList = () => {

    return (
        <div className="container">
            <header>
                <h4>To Do List</h4>
            </header>
            <div className="todo-container">
                    <CardComponent/>

            </div>
        </div>
    )

}
