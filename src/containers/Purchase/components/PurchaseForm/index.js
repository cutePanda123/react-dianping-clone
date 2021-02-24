import React, { Component } from 'react';

class PurchaseForm extends Component {
    render() {
        return (
            <div className='purchaseForm'>
                <div className='purchaseForm__wrapper'>
                    <div className='purchaseForm__row'>
                        <div className='purchaseForm__rowLabel'>Quantity</div>
                        <div className='purchaseForm__rowValue'>
                            <span className='purchaseForm__counter--dec'
                            onClick={this.quantityDescreaseHandler}>-</span>
                            <input className='purchaseForm__quantity' />
                            <span className='purchaseForm__counter--inc'
                            onClick={this.quantityIncreaseHandler}
                            >+</span>
                        </div>
                    </div>
                    <div className='purchaseForm__row'>
                        <div className='purchaseForm__rowLabel'>Cost</div>
                        <div className='purchaseForm__rowValue'></div>
                    </div>
                    <div className='purchaseForm__row'>
                        <div className='purchaseForm__rowLabel'>Phone</div>
                        <div className='purchaseForm__rowValue'></div>
                    </div>
                </div>
            </div>
        );
    }

    quantityIncreaseHandler = () => {}
    quantityDescreaseHandler = () => {}
}

export default PurchaseForm;