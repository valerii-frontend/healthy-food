import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({onShowCart}) => {
	return (
		<>
			<header className={classes.header}>
				<h2><span>Healthy food</span> 🥗</h2>
				<HeaderCartButton onClick={onShowCart} />
			</header>
		</>
	);
};

export default Header;
