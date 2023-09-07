import Header from '../header/Header';
import styles from './Layout.module.scss';
import Main from '../main/Main';
import { BarLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

const Layout = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={styles.container}>
			<Header />
			{isLoading ? (
				<BarLoader color="#0066ff" height={6} width={1080} />
			) : (
				<Main />
			)}
		</div>
	);
};

export default Layout;
