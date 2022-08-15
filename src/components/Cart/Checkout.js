import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
import Button from "../UI/Button";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInpValidity, setFormInpValidity] = useState({ name: true, street: true, city: true, postal: true });
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostal = postalInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredPostalIsValid = isFiveChars(enteredPostal);
		const enteredCityIsValid = !isEmpty(enteredCity);

		setFormInpValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postal: enteredPostalIsValid,
			city: enteredCityIsValid,
		});

		const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;
		if (!formIsValid) {
			return;
		}
		props.onConfirm({
			name: enteredName,
			street: enteredCity,
			postal: enteredPostal,
			city: enteredCity,
		});
	};

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={`${classes.control} ${!formInpValidity.name ? classes.invalid : ""}`}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef} defaultValue='John Alleen'/>
				{!formInpValidity.name && <p>Please enter the valid name</p>}
			</div>
			<div className={`${classes.control} ${!formInpValidity.street ? classes.invalid : ""}`}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} defaultValue='9525 Queens Blvd'/>
				{!formInpValidity.street && <p>Please enter the valid street</p>}
			</div>
			<div className={`${classes.control} ${!formInpValidity.postal ? classes.invalid : ""}`}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalInputRef} defaultValue='11374'/>
				{!formInpValidity.postal && <p>Please enter the valid postal code</p>}
			</div>
			<div className={`${classes.control} ${!formInpValidity.city ? classes.invalid : ""}`}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} defaultValue='New York'/>
				{!formInpValidity.city && <p>Please enter the valid city</p>}
			</div>
			<div className={classes.actions}>
				<Button type='button' transparent={'yes'} onClick={props.onCancel}>
					Cancel
				</Button>
				<Button>Confirm</Button>
			</div>
		</form>
	);
};

export default Checkout;
