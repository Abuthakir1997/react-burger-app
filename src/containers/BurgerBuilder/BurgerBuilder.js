import React, { Component } from 'react';
import Auxx from '../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false

    }

    updatePurchasestate(ingredients) {

        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];
        })

            .reduce((sum, el) => {
                return sum + el;
            }, 0);


        this.setState({ purchasable: sum > 0 })

    }

    purchaseHandler = () => {
        this.setState(
            { purchasing: true }
        )
    }

    purchaseCancelHandler = () => {
        this.setState(
            { purchasing: false }
        )
    }

    purchaseContinueHandler = () => {
        alert("You continue!!!");

    }

    addHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchasestate(updatedIngredients);


    };

    removeHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        console.log(this.state.ingredients);

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchasestate(updatedIngredients);
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Auxx>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary show={this.state.purchase} ingredients={this.state.ingredients} purchaseCancelled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls ingredientsAdded={this.addHandler} ingredientsRemoved={this.removeHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    ingredientsPrice={INGREDIENTS_PRICES}
                ></BuildControls>
            </Auxx >
        )
    };
}

export default BurgerBuilder;