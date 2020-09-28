import React from 'react';
import Auxx from '../../containers/hoc/Auxx';
import classes from './Layout.module.css';


const layout = (props) => (

    <Auxx>
        <div className={classes.content}>
            Toolbar, sidedrawer, backdrop
    </div>
        <main>
            {props.children}
        </main>
    </Auxx>
);

export default layout;