import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import TicketList from '../ticket-list/TicketList';
import styles from './Main.module.scss';

const Main = () => {
	const [activeCurrency, setActiveCurrency] = useState('usd');
	const [filters, setFilters] = useState({
		filterAll: true,
		filter0: false,
		filter1: false,
		filter2: false,
		filter3: false,
	});

	const changeCurrency = (event) => {
		setActiveCurrency(event.target.innerHTML);
	};

	const handleFilterChange = (event) => {
		const id = event.target.id;
		const isChecked = event.target.checked;
		let newState = {};

		switch (id) {
			case 'filter0':
				isChecked
					? (newState = {
							...filters,
							filterAll: false,
							filter0: true,
					  })
					: (newState = { ...filters, filter0: isChecked });
				break;
			case 'filter1':
				isChecked
					? (newState = {
							...filters,
							filterAll: false,
							filter1: true,
					  })
					: (newState = { ...filters, filter1: isChecked });

				break;
			case 'filter2':
				isChecked
					? (newState = {
							...filters,
							filterAll: false,
							filter2: true,
					  })
					: (newState = { ...filters, filter2: isChecked });
				break;
			case 'filter3':
				isChecked
					? (newState = {
							...filters,
							filterAll: false,
							filter3: true,
					  })
					: (newState = { ...filters, filter3: isChecked });
				break;
			default:
				isChecked
					? (newState = {
							filterAll: true,
							filter0: false,
							filter1: false,
							filter2: false,
							filter3: false,
					  })
					: (newState = { ...filters, filterAll: false });
		}

		return setFilters(newState);
	};

	const handleOnly = (event) => {
		const id = event.target.parentElement.childNodes[0].childNodes[1].id;

		const newStateTemp = {
			filterAll: false,
			filter0: false,
			filter1: false,
			filter2: false,
			filter3: false,
		};

		let newState = {};

		switch (id) {
			case 'filter0':
				newState = { ...newStateTemp, filter0: true };
				break;
			case 'filter1':
				newState = { ...newStateTemp, filter1: true };
				break;
			case 'filter2':
				newState = { ...newStateTemp, filter2: true };
				break;
			case 'filter3':
				newState = { ...newStateTemp, filter3: true };
				break;
			default:
				newState = { ...newStateTemp, filterAll: true };
		}

		return setFilters(newState);
	};

	return (
		<div className={styles.container}>
			<Sidebar
				changeCurrency={changeCurrency}
				activeCurrency={activeCurrency}
				handleFilterChange={handleFilterChange}
				filters={filters}
				handleOnly={handleOnly}
			/>
			<TicketList activeCurrency={activeCurrency} filters={filters} />
		</div>
	);
};

export default Main;
