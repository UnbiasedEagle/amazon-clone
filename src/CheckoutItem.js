import React, { useContext } from 'react';
import StarIcon from '@material-ui/icons/Star';
import AmazonContext from './context/amazonContext';
import './CheckoutItem.css';

const Checkout = ({ item: { id, price, title, image, rating } }) => {
	const amazonContext = useContext(AmazonContext);

	const removeFromItem = () => {
		amazonContext.removeFromBasket(id);
	};

	return (
		<div className='checkoutItem'>
			<img src={image} alt='title' />
			<div className='checkoutItem__info'>
				<p className='checkoutItem__title'>{title}</p>
				<p className='checkoutItem__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutItem__rating'>
					{Array(rating).fill().map((_, i) => {
						return <StarIcon className='product__starIcon' />;
					})}
				</div>
				<button onClick={removeFromItem}>Remove from basket</button>
			</div>
		</div>
	);
};

export default Checkout;
