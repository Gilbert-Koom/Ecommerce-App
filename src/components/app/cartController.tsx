import minus from './assets/icon-minus.svg'
import plus from './assets/icon-plus.svg'
import CartImage from './cart'
import useCartStore from './state'

function Controller() { 
	const itemsInCart=useCartStore((state)=>state.count)
	const increment=useCartStore((state)=>state.increment)
	const decrement=useCartStore((state)=>state.decrement)


	function decreasor() {
		if (itemsInCart>0) {
			decrement()
			
		}
		else{
			console.log('items in cart is less than zero')	
		}
		
	}
	return(
		<>
			<div className='flex'>
				<button>
					<img src={minus} alt="" onClick={decreasor}/>
				</button>
				<p>{itemsInCart}</p>
				<button onClick={increment}>
					<img src={plus} alt="" />
				</button>
			</div>
			<button className='flex'>
				<CartImage />
				<p>Add to Cart</p>
			</button>
		</>
	)
}

export default Controller