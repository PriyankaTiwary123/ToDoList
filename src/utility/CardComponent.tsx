import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

export default function CardComponent(props: any) {

    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [taskArray, setTaskListArr] = React.useState([] as any);


    const getTitle = (e: any) => {
        setTitle(e.target.value);

    }
    const getDesc = (e: any) => {
        setDesc(e.target.value)
    }
    const saveTask = () => {
        taskArray.push({ title: title, desc: desc })
        setTaskListArr(taskArray);
        console.log(taskArray);
        setTitle("");
        setDesc("");
    }
  
    return (
        <div className="task-conatiner">
            <div className="card col col-sm-4 col col-xs-6 col col-md-4">
                <div className="card-body">

                    <div className="modal-content-title">
                        <TextField
                            id="outlined-textarea"
                            label="Enter Task"
                            placeholder="Placeholder"
                            multiline
                            variant="outlined"
                            onChange={(e) => getTitle(e)}
                            value={title}
                        />
                    </div>
                    <div className="modal-content-body">
                        <TextField
                            id="outlined-multiline-static"
                            label="Enter Task Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={(e) => getDesc(e)}
                            value={desc}
                        />
                    </div>
                    <button type="button" className="btn btn-success" onClick={saveTask}>Save</button>
                </div>
            </div>
            {taskArray.length > 0 && taskArray.forEach((element: any) => {
                <div className="card col col-sm-4 col col-xs-6 col col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.desc}</p>
                        <EditIcon />
                        <DeleteIcon />
                        <Button variant="outlined" color="primary">Mark Done</Button>
                    </div>
                </div>

            })}

        </div>

    )

}