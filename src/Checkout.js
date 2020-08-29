import React, { Fragment, useContext } from 'react';
import Header from './Header';
import AmazonContext from './context/amazonContext';
import CheckoutItem from './CheckoutItem';
import './Checkout.css';
import Subtotal from './Subtotal';
import Footer from './Footer';

const Checkout = () => {
	const amazonContext = useContext(AmazonContext);
	const { basket } = amazonContext;
	return (
		<Fragment>
			<Header />
			<div className='checkout'>
				<div className='checkout__left'>
					<img
						className='checkout__ad'
						src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234922668_.jpg'
						alt='checkout-ad'
					/>
					<div className='checkout__content'>
						{basket.length === 0 ? (
							<div className='checkout__empty'>
								<h2>Shopping Basket is empty</h2>
								<p>
									You have no items in your basket. To buy one or more items, click "Add to basket"
									next to item
								</p>
							</div>
						) : (
							<div>
								<h2 className='checkout__title'>Your Shopping Basket</h2>
								{/* All the checkout Products */}
								{basket.map((item, index) => {
									return <CheckoutItem key={index} item={item} />;
								})}
							</div>
						)}
					</div>
				</div>
				{basket.length > 0 && (
					<div className='checkout__right'>
						<Subtotal />
					</div>
				)}
			</div>
			<Footer position={true} />
		</Fragment>
	);
};

export default Checkout;
