import styles from './Heading.module.scss';

const Heading = ({ title }) => {
	return <h3 className={styles.header}>{title}</h3>;
};

export default Heading;
