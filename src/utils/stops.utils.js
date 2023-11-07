const countStops = (stops) => {
	let textContent = '';

	switch (stops) {
		case 1:
			textContent = '1 transfer';
			break;
		case 2:
			textContent = '2 transfers';
			break;
		case 3:
			textContent = '3 transfers';
			break;
		default:
			textContent = 'no transfer';
	}

	return textContent;
};

export default countStops;
