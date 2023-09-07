const countStops = (stops) => {
	let textContent = '';

	switch (stops) {
		case 1:
			textContent = '1 пересадка';
			break;
		case 2:
			textContent = '2 пересадки';
			break;
		case 3:
			textContent = '3 пересадки';
			break;
		default:
			textContent = 'без пересадок';
	}

	return textContent;
};

export default countStops;
