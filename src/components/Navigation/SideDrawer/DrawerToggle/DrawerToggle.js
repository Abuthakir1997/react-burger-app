import React from "react";
import "./DrawerToggle.module.css";
import classes from "./DrawerToggle.module.css";

const drawertoggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked} >

        <div></div>
        <div></div>
        <div></div>

    </div>
)

export default drawertoggle;