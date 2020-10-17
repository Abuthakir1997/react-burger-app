import React from 'react';
import Auxx from "../../../containers/hoc/Auxx";
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const modal = (props) => (
    <Auxx>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div className={classes.Modal} style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0', display: props.show ? 'block' : 'none', transition: props.show ? 'transform 1s ease-out' : 'none' }}>
            {props.children}
        </div>
    </Auxx>

);

export default modal;