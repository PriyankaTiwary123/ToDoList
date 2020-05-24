import * as React from 'react';
import CardComponent from '../utility/CardComponent'
import { Button } from '@material-ui/core';

export const TodoList = () => {
    const [cards, setCards] = React.useState(false);
    const [cardsArray, setCardsArray] = React.useState([] as any);


    const addMoreTaskList = () => {
        setCards(true);


    }

    return (
        <div className="container">
            {console.log("in render")}
            <header>
                <p>To Do List</p><p><Button variant="contained" color="primary" onClick={addMoreTaskList}>Add ToDolist</Button></p>
            </header>
            <div className="todo-container">
                <div className="create-task">
                    <CardComponent cards={cards} />
                </div>

            </div>
        </div>
    )

}
