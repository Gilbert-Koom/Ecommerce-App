
import menu from './assets/icon-menu.svg'
import close from './assets/icon-close.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropdownMenuComponent() {
	return(
		<>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<img src={menu} alt="" />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<img src={close} alt="" />
					</DropdownMenuItem>
					<DropdownMenuItem>Collections</DropdownMenuItem>
					<DropdownMenuItem>Men</DropdownMenuItem>
					<DropdownMenuItem>Women</DropdownMenuItem>
					<DropdownMenuItem>About</DropdownMenuItem>
					<DropdownMenuItem>Contact</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

export default DropdownMenuComponent