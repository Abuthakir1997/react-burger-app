import React from 'react';
import Auxx from '../../containers/hoc/Auxx';
import classes from './Layout.module.css';
import ToolBar from "../Navigation/ToolBar/ToolBar";


const layout = (props) => (

    <Auxx>
        <ToolBar></ToolBar>
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxx>
);

export default layout;