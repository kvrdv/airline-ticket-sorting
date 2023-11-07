import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import Heading from '../heading/Heading';
import styles from './Currency.module.scss';

const Currency = ({ activeCurrency, changeCurrency }) => {
	const currencies = ['usd', 'eur', 'rub'];

	return (
		<div className={styles.container}>
			<Heading title={'currency'} />
			<div className={styles.menu}>
				{currencies.map((currency) => {
					return (
						<span
							className={clsx({
								[styles.item]: true,
								[styles.active]: activeCurrency === currency,
								[styles.hover]: activeCurrency !== currency,
							})}
							key={uuidv4()}
							onClick={changeCurrency}
						>
							{currency}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Currency;
