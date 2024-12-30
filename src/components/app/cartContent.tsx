import useCartStore from "./state"
import thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import deleteIcon from './assets/icon-delete.svg'
function Cartcontent() {
	const itemsInCart=useCartStore((state)=>state.cart)
	return(
		<>
			<p>Cart</p>
			<p>{itemsInCart}</p>
			<div>
				{
					itemsInCart===0 ? <p>Your cart is empty</p> : <Items />
				}
			</div>
		</>
	)
}

function Items() {
	const itemsInCart=useCartStore((state)=>state.count)
	return(
		<>
			<div className="flex">
				<img src={thumbnail1} alt="" />
				<div>
					<p>Fall limited edition sneakers</p>
					<p>$125.00 &#215; {itemsInCart} <span>${itemsInCart * 125}</span> </p>
				</div>
				<img src={deleteIcon} alt="" />

			</div>
			<button className="bg-red-500">Checkout</button>
		</>
	)
	
}

export default Cartcontent