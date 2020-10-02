import React from 'react';
import classes from './ToolBar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div> menu</div>
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;