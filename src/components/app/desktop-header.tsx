import Avatar from "./avatar";
import Cart from "./cart";


function DesktopHeader() {
	return(
		<>
			<div className="flex justify-between items-center">
				<p>Sneakers</p>
				<p>Collections</p>
				<p>Men</p>
				<p>Women</p>
				<Cart />
				<Avatar />
			</div>
			
		</>
	)   
}

export default DesktopHeader
