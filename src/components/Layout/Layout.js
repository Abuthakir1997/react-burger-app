import React, { Component } from 'react';
import Auxx from '../../containers/hoc/Auxx';
import classes from './Layout.module.css';
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showClosedHandler = () => {
        this.setState(
            { showSideDrawer: false }
        )
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }
    render() {
        return (
            <Auxx>
                <ToolBar ToggleClicked={this.sideDrawerToggleHandler}></ToolBar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.showClosedHandler}></SideDrawer>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxx>
        )
    }

};

export default Layout;