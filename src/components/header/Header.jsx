import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import clouds from '../../assets/images/clouds.svg';
import { useEffect } from 'react';

const Header = () => {
	useEffect(() => {
		const clouds = document.getElementById('clouds');

		window.addEventListener('mousemove', function (e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			clouds.style.transform =
				'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		});
	});

	return (
		<div className={styles.container}>
			<img
				src={logo}
				alt="logo"
				className={styles.logo}
				draggable={false}
			/>
			<img
				src={clouds}
				id="clouds"
				alt="clouds"
				className={styles.clouds}
				draggable={false}
			/>
		</div>
	);
};

export default Header;
