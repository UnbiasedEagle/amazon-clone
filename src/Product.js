import React, { useContext } from 'react';
import StarIcon from '@material-ui/icons/Star';
import AmazonContext from './context/amazonContext';
import './Product.css';

const Product = ({ id, title, image, rating, price }) => {
	const amazonContext = useContext(AmazonContext);

	const addToBasket = () => {
		amazonContext.addToBasket({ id, title, image, rating, price });
	};

	return (
		<div className='product'>
			<div className='product__info'>
				<p className='product__title'>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating).fill().map((_, i) => {
						return <StarIcon className='product__starIcon' />;
					})}
				</div>
			</div>
			<img src={image} alt='product' />
			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	);
};

export default Product;
