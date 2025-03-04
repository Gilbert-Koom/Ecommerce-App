import Avatar from "./avatar";
import Cart from "./cart";
import DropdownMenuComponent from "./dropDownMenu";

function MobileHeader() {
	return(
		<>
			<div className="md:hidden flex space-x-4 justify-between items-center p-4">
				<DropdownMenuComponent />
				<p>Sneakers</p>
				<Cart />
				<Avatar />
			</div>
			
		</>
	)   
}

export default MobileHeader