import React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from '../Burger/Burgeringredient/Burgeringredient';
const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + i} type={igkey} />
        }
        );
    })


        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformIngredients.length === 0 ?
        transformIngredients = <p>please insert spices</p> : null);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>



        </div>
    )
};

export default burger;