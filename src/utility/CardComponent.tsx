import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CardComponent(props: any) {

    const [task, setTaskList] = React.useState("");
    const [cardCount, setCardCount] = React.useState(1);
    const [taskArray, setTaskListArr] = React.useState([] as any);
    const [addCard, setAddCard] = React.useState(false);
    const [editText, setEditedText] = React.useState("");
    // const [markDone ,setMarkAsDone]= React.useState(false);
    const [btnName, setBtnName] = React.useState("");

    const setTask = (e: any) => {
        setTaskList(e.target.value);
        console.log(e.target.value)
    }

    const saveTask = () => {
        const taskObject: any = { task: task, markAsDone: false, edited: false }
        console.log(taskObject)
        console.log("priyanka", taskArray)
        // let editedIndex=taskArray.findIndex((x:any)=>x.edited===true);
        // console.log(editedIndex)
        // if(editedIndex!==-1){
        //    taskArray.splice(editedIndex,1)
        //    console.log(taskArray)
        //     setTaskListArr(taskArray)
        // }
        setTaskListArr([...taskArray, taskObject]);
        localStorage.setItem('taskArray', JSON.stringify(taskArray))
        // console.log(localStorage)
        console.log(taskArray);
        setAddCard(true)
        setCardCount(cardCount + 1);
        console.log(cardCount)
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
        console.log(element, index)
        let tempObj = Object.assign({}, element)
        tempObj.markAsDone = true;
        let newTaskArray = taskArray.splice(index, 1, tempObj)
        setTaskListArr([...newTaskArray, tempObj]);

    }

    const editTaskList = (element: any, index: number) => {
        setCardCount(cardCount - 1);
        setAddCard(false);
        setTaskList(element.task);

        taskArray.splice(index, 1, element);
        let tempObjEdited = Object.assign({}, element)
        tempObjEdited.edited = true;
        // console.log("cggghgjgjghj",newEditedArray)
        setTaskListArr([...taskArray, tempObjEdited])
        setEditedText("edited")
        console.log("aaaa", taskArray)
    }

    return (
        <div className="task-conatiner col col-sm-6 col col-xs-12 col col-md-6">
            {cardCount > 1 || addCard ? taskArray && taskArray.map((element: any, index: number) => {
                return (<div className={element.markAsDone ? "card  added-card-section-" + index : "card  added-card-section"} key={index}><div className="card-body"><p>{element.task}</p>
                    <div className="task-list-btns">
                        <EditIcon onClick={() => editTaskList(element, index)}></EditIcon>
                        <DeleteIcon onClick={() => deleteCard(index)}></DeleteIcon>
                        <button type="button" className="btn btn-outline-primary" onClick={() => markAsDone(element, index)}>Mark Done</button>
                    </div>
                </div></div>)
            }) :
                <div className="card edit-card-section ">
                    <div className="card-body">
                        <input className="task-detail"
                            aria-label="maximum height"
                            placeholder="enter task"
                            value={task}
                            onChange={(e) => setTask(e)}
                        />
                    </div>

                </div>}
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