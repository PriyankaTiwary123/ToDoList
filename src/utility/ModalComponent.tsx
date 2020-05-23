import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { AppContextInterface, AppContextProvider } from '../context/AppContext';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function SimpleModal(props: any) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [taskArray, setTaskListArr] = React.useState([] as any);

    const toDoListDesc: AppContextInterface = {
        title: title,
        desc: desc,
        toDoListArr: taskArray
    }

    const saveModal = () => {
        taskArray.push(toDoListDesc);
        setTaskListArr(taskArray);
        props.handleClose()
        console.log(taskArray);
    }

    const getTitle = (e: any) => {
        console.log(e.target.value);
        setTitle(e.target.value);

    }
    const getDesc = (e: any) => {
        setDesc(e.target.value)
    }

    const body = (
        <AppContextProvider value={toDoListDesc}>
            <div style={modalStyle} className={classes.paper}>
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

                <Button className="save-btn" variant="outlined" color="primary" onClick={saveModal}>Save</Button>
                <SimpleModal />
            </div>
        </AppContextProvider>

    );

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}