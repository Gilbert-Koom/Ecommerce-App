
import minus from './assets/icon-minus.svg'
import plus from './assets/icon-plus.svg'
import CartImage from './cart'
function Controller() { 
	return(
		<>
			<div className='flex'>
				<button>
					<img src={minus} alt="" />
				</button>
				<p></p>
				<button>
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