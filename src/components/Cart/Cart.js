import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import Button from "../UI/Button";

const Cart = ({onClose}) => {
	const cartCtx = useContext(CartContext);
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmitting, setDidSubmitting] = useState(false);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	const orderHandler = () => setIsCheckout(true);
	const acTionButtons = (
		<div className={classes.actions}>
			<Button transparent={'yes'} onClick={onClose}>
				Close
			</Button>
			{hasItems && (
				<Button onClick={orderHandler}>
					Order
				</Button>
			)}
		</div>
	);
	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		await fetch("https://react-valerii-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
			method: "POST",
			body: JSON.stringify({
				user: userData,
				orderedItems: cartCtx.items,
			}),
		});
	setTimeout(()=> {
		setIsSubmitting(false);
		setDidSubmitting(true);

		setTimeout(()=>{
			onClose();
		},1000)
	},2000)
	};
	const CartModalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onCancel={onClose} onConfirm={submitOrderHandler} />}
			{!isCheckout && acTionButtons}
		</>
	);
	const isSubmittingModalContent = <p>Sending order data...</p>;
	const didSubmittingModalContent = <p>Successfully sent the order!</p>;
	return (
		<Modal onClose={onClose}>
			{!isSubmitting && !didSubmitting && CartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmitting && didSubmittingModalContent}
		</Modal>
	);
};

export default Cart;
