import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import AmazonContext from './context/amazonContext'
import './Subtotal.css'

const Subtotal = () => {
    const amazonContext =useContext(AmazonContext)
    const {basket}=amazonContext

    const getBasketTotal=()=>{
        return basket.reduce((acc,curr)=>{
            return acc+curr.price
        },0)
    }

	return (
		<div className='subtotal'>
            <CurrencyFormat value={getBasketTotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value)=>{
                return (<>
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>)
            }}/>
			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Subtotal;
