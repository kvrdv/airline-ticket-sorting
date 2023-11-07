import { v4 as uuidv4 } from 'uuid';
import Heading from '../heading/Heading';
import clsx from 'clsx';
import styles from './Transfer.module.scss';

const Transfer = ({ handleFilterChange, filters, handleOnly }) => {
	const filtersData = [
		{ id: 'filterAll', title: 'All', defaultCheck: true },
		{ id: 'filter0', title: 'No transfers', defaultCheck: false },
		{ id: 'filter1', title: '1 transfer', defaultCheck: false },
		{ id: 'filter2', title: '2 transfers', defaultCheck: false },
		{ id: 'filter3', title: '3 transfers', defaultCheck: false },
	];

	return (
		<div className={styles.container}>
			<Heading title={'number of transfers'} />
			<form className={styles.list}>
				{filtersData.map((filter) => {
					return (
						<div
							className={clsx({
								[styles.item]: true,
							})}
							key={uuidv4()}
						>
							<label htmlFor={filter.id}>
								{filter.title}
								<input
									type="checkbox"
									className={styles.checkbox}
									onChange={handleFilterChange}
									id={filter.id}
									checked={filters[filter.id]}
								/>
								<span className={styles.checked}></span>
							</label>
							<span className={styles.reset} onClick={handleOnly}>
								only
							</span>
						</div>
					);
				})}
			</form>
		</div>
	);
};

export default Transfer;
