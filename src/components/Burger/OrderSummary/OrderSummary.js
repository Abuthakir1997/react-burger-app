import React from 'react';
import Auxx from '../../../containers/hoc/Auxx';

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

        </Auxx>
    )
};

export default orderSummary;