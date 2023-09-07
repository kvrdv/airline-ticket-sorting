import Ticket from './Ticket/Ticket';
import styles from './TicketList.module.scss';
import data from '../../data/tickets.json';
import { v4 as uuidv4 } from 'uuid';
import countStops from '../../utils/stops.utils';
import airlinesLogos from '../../utils/logos-map.utils';
import filterData from '../../utils/filter-list.utils';

const TicketList = ({ activeCurrency, filters }) => {
	return (
		<div className={styles.container}>
			{filterData(filters, data).map((ticket) => {
				return (
					<Ticket
						key={uuidv4()}
						origin={ticket.origin}
						originName={ticket.origin_name}
						destination={ticket.destination}
						destinationName={ticket.destination_name}
						departureDate={ticket.departure_date}
						departureTime={ticket.departure_time}
						arrivalDate={ticket.arrival_date}
						arrivalTime={ticket.arrival_time}
						stops={countStops(ticket.stops)}
						price={ticket.price}
						activeCurrency={activeCurrency}
						logo={airlinesLogos[ticket.carrier]}
					/>
				);
			})}
		</div>
	);
};

export default TicketList;
