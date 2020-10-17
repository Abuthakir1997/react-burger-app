import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

];

const INGREDIENTS_PRICE = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
}


const price = Object.keys(INGREDIENTS_PRICE).map(igkey => (
    <p key={igkey}> {igkey} : $ {INGREDIENTS_PRICE[igkey]}</p>
))





const buildControls = (props) => (

    < div className={classes.BuildControls} >
        <p> current price <strong>{props.price.toFixed(2)}</strong></p>
        <div className={classes.Price}>
            {price}
        </div>
        {
            controls.map(ctrl => (
                <BuildControl

                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    ingredientsPrice={props.ingredientsPrice}


                />
            ))
        }

        <button className={classes.OrderButton}
            disabled={!props.purchasable} onClick={props.ordered}>order now</button>






    </div >
);

export default buildControls;