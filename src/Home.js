import React from 'react';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import './Home.css';

const Home = () => {
	return (
		<React.Fragment>
			<div className='home'>
				<Header />
				<div className='home__imageContainer'>
					<img
						className='home__image'
						src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
						alt='amazon-banner'
					/>
				</div>

				{/* Product Section */}
				<div className='home__products'>
					<div className='home__row'>
						<Product
							id={1}
							title='Philips 4K Ultra Slim LED TV'
							price={400}
							rating={4}
							image='https://images.philips.com/is/image/PhilipsConsumer/55PUT6103S_94-RTP-global-001?$jpglarge$&wid=420&hei=360'
						/>
						<Product
							id={2}
							title='Amzon Echo'
							price={20.5}
							rating={5}
							image='https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg'
						/>
					</div>
					<div className='home__row'>
						<Product
							id={3}
							title='Fire Stick'
							price={30.4}
							rating={5}
							image='https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL320_SR320,320_.jpg'
						/>
						<Product
							id={4}
							title='Kitchen Set'
							price={10}
							rating={4}
							image='https://images-eu.ssl-images-amazon.com/images/G/31//img15/home/LA/Kitchen_row3_a._V283461795_.jpg'
						/>
						<Product
							id={5}
							title='Iphone X'
							price={1100.96}
							rating={5}
							image='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/AppleProjectEye/Updated/AMZ_FamiyStripe_iPhone_11._CB450736421_.png'
						/>
					</div>
					<div className='home__row'>
						<Product
							id={6}
							title='Mi Notebook 14'
							price={800}
							rating={4}
							image='https://i01.appmifile.com/webfile/globalimg/in/cms/4BAADF0B-B0D8-D9C3-1D38-43BAB1F76080.jpg'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
