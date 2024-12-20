import Avatar from "./avatar";
import Cart from "./cart";
import DropdownMenuComponent from "./dropDownMenu";

function MobileHeader() {
	return(
		<>
			<div className="flex justify-between items-center">
				<DropdownMenuComponent />
				<p>Sneakers</p>
				<Cart />
				<Avatar />
			</div>
			
		</>
	)   
}

export default MobileHeader