import React from "react";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Auxx from "../../../containers/hoc/Auxx";



const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Auxx>
            <BackDrop show={props.open} clicked={props.closed}></BackDrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>

                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxx>

    );
}

export default sideDrawer;