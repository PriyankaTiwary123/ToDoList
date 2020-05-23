import React from 'react';
import { AppContextConsumer } from '../context/AppContext';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


export default function CardComponent(props: any) {
    return (
        <AppContextConsumer>
            {appContext => appContext && (
                appContext.toDoListArr.map((resVal: any) =>
                    <div className="card col col-sm-4 col col-xs-6 col col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{resVal.title}</h5>
                            <p className="card-text">{resVal.desc}</p>
                            <EditIcon />
                            <DeleteIcon />
                            <Button variant="outlined" color="primary">Mark as Done</Button>
                        </div>
                    </div>
                )
            )}

        </AppContextConsumer>
    );
}