import React from 'react';
import Auxx from '../../../containers/hoc/Auxx';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return (
            <div>
                <li key={igkey}>
                    <span style={{ textTransform: "uppercase", fontWeight: "bold", marginLeft: "10px" }}> {igkey}</span> : {props.ingredients[igkey]}
                </li>
            </div>
        );
    });

    return (
        <Auxx>
            <h3 style={{ textAlign: "center" }}>Your order</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p style={{ marginTop: '20px' }}>A delicious burger with the following ingredients</p>
            <p style={{ marginTop: "10px" }}><strong>Total price : {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>

        </Auxx>
    )
};

export default orderSummary;