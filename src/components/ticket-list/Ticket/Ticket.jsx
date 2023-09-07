import styles from './Ticket.module.scss';
import plane from '../../../assets/images/plane.svg';
import { convertCurrency } from '../../../utils/currency.utils';
import formatDate from '../../../utils/date.utils';

const Ticket = ({
	origin,
	originName,
	destination,
	destinationName,
	departureDate,
	departureTime,
	arrivalDate,
	arrivalTime,
	stops,
	price,
	activeCurrency,
	logo,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.purchase}>
				<img src={logo} alt="airline logo" draggable={false} />
				<button>
					Купить <br />{' '}
					{`за ${convertCurrency(price, activeCurrency)}`}
				</button>
			</div>
			<div className={styles.info}>
				<div className={styles.from}>
					<span className={styles.time}>{departureTime}</span>
					<span
						className={styles.airport}
					>{`${origin}, ${originName}`}</span>

					<span>{formatDate(departureDate)}</span>
				</div>

				<div className={styles.transfer}>
					<span>{stops}</span>
					<img src={plane} alt="airplane" />
				</div>

				<div className={styles.to}>
					<span className={styles.time}>{arrivalTime}</span>
					<span
						className={styles.airport}
					>{`${destinationName}, ${destination}`}</span>
					<span className={styles.date}>
						{formatDate(arrivalDate)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
