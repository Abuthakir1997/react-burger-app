import React from 'react';
import './BuildControl.module.css';
import classes from './BuildControl.module.css';
import Auxx from "../../../../containers/hoc/Auxx";


const buildControl = (props) => {

    return (
        <Auxx>

            <div className={classes.BuildControl} >
                <div className={classes.Label}>{props.label}</div>
                <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
                <button className={classes.More} onClick={props.added}>More</button>
            </div>


        </Auxx>
    )


}


export default buildControl;