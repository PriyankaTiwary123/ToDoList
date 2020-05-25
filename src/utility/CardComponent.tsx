import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CardComponent(props: any) {

    const [task, setTaskList] = React.useState("");
    const [cardCount, setCardCount] = React.useState(1);
    const [taskArray, setTaskListArr] = React.useState([] as any);
    const [addCard, setAddCard] = React.useState(false);

    const setTask = (e: any) => {
        setTaskList(e.target.value);
    }

    const saveTask = () => {
        const taskObject: any = { task: task, markAsDone: false, edited: false }
        let editedTask = taskArray.filter((x: any) => x.edited === true);
        let tempTaskArray = [...taskArray];
        if (editedTask && editedTask.length > 0) {
            tempTaskArray.splice(tempTaskArray.indexOf(editedTask[0]), 1)
        }
        setTaskListArr([...tempTaskArray, taskObject]);
        setAddCard(true)
        setCardCount(cardCount + 1);
    }

  

    React.useEffect(() => {
        setTaskListArr(getLocalStorageValue())
    }, [])

    React.useEffect(() => {
        localStorage.setItem('taskArray', JSON.stringify(taskArray))
    }, [taskArray])

    const getLocalStorageValue = () => {
        return JSON.parse(localStorage.getItem('taskArray') || '[]')
    }


    const addAnotherCard = () => {
        setCardCount(cardCount - 1);
        setAddCard(false);
        setTaskList("")
    }
    const cancelCardAddition = () => {
        setAddCard(true);
    }

    const deleteCard = (index: number) => {
        let newTaskArray = taskArray.filter((i: any, id: number) => id !== index);
        setTaskListArr(newTaskArray);
    }

    const markAsDone = (element: any, index: number) => {
        let tempTaskArray = [...taskArray];
        tempTaskArray[index].markAsDone = true;
        setTaskListArr(tempTaskArray);
        localStorage.setItem('taskArray', JSON.stringify(tempTaskArray))
    }

    const editTaskList = (element: any, index: number) => {
        setCardCount(cardCount - 1);
        setAddCard(false);
        setTaskList(element.task);
        let tempTaskArray = [...taskArray];
        tempTaskArray[index].edited = true;
        setTaskListArr(tempTaskArray);
    }

    return (
        <div className="task-conatiner col col-sm-6 col col-xs-12 col col-md-6">
            {taskArray && taskArray.length && taskArray.map((element: any, index: number) => {
                return (<div className={element.markAsDone ? "card  added-card-section-" + index : "card  added-card-section"} key={index}><div className="card-body"><p>{element.task}</p>
                    <div className="task-list-btns row">
                        <EditIcon className="col col-3" onClick={() => editTaskList(element, index)}></EditIcon>
                        <DeleteIcon className="col col-3" onClick={() => deleteCard(index)}></DeleteIcon>
                        <button type="button" className="btn btn-outline-primary col col-3" onClick={() => markAsDone(element, index)}>Mark Done</button>
                    </div>
                </div></div>)
            })}
            {!addCard ?
                <div className="card edit-card-section ">
                    <div className="card-body">
                        <input className="task-detail"
                            aria-label="maximum height"
                            placeholder="enter task"
                            value={task}
                            onChange={(e) => setTask(e)}
                        />
                    </div>

                </div> : ''}
            <div className="todo-btns">
                {addCard ?
                    <button type="button" className="btn btn-secondary" onClick={addAnotherCard}>Add Another Card</button> :
                    <div>
                        <button type="button" className="btn btn-success" onClick={saveTask}>Save</button>
                        <ClearIcon onClick={cancelCardAddition} /></div>}
            </div>

        </div>

    )

}