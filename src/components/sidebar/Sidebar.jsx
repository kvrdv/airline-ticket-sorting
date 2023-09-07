import styles from './Sidebar.module.scss';
import Currency from './currency/Currency';
import Transfer from './transfer/Transfer';

const Sidebar = ({
	activeCurrency,
	changeCurrency,
	handleFilterChange,
	filters,
	handleOnly,
}) => {
	return (
		<div className={styles.container}>
			<Currency
				activeCurrency={activeCurrency}
				changeCurrency={changeCurrency}
			/>
			<Transfer
				handleFilterChange={handleFilterChange}
				filters={filters}
				handleOnly={handleOnly}
			/>
		</div>
	);
};

export default Sidebar;
