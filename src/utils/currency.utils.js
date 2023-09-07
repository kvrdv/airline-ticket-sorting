import axios from 'axios';

let usdRate;
let eurRate;

const getRates = async () => {
	try {
		const response = await axios.get(
			'https://www.floatrates.com/daily/rub.json'
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

getRates().then((res) => {
	usdRate = res.data.usd.rate;
	eurRate = res.data.eur.rate;
});

const convertCurrency = (price, currencyName) => {
	let newPrice = 0;

	switch (currencyName) {
		case 'usd':
			newPrice = `${(price * usdRate).toFixed(2)} $`;
			break;
		case 'eur':
			newPrice = `${(price * eurRate).toFixed(2)} €`;
			break;
		default:
			newPrice = `${price * 1} ₽`;
	}

	return newPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};

export { getRates, convertCurrency };
