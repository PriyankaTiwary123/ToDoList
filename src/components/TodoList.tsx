import * as React from 'react';
import CardComponent from '../utility/CardComponent'
import { Button } from '@material-ui/core';
import SimpleModal from '../utility/ModalComponent';


export const TodoList = () => {
    const [open, setOpen] = React.useState(false);

    const openPopUp = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="container">
            <header>
                <p>To Do List</p><p><Button variant="contained" color="primary" onClick={openPopUp}>Add ToDolist</Button></p>
            </header>
            <div className="todo-container">
                <div className="create-task">
                    <CardComponent />
                    <SimpleModal open={open} handleClose={handleClose} />
                </div>
                <div className="done-task">

                </div>

            </div>
        </div>
    )

}
