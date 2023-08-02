import Image from "next/image";
import Profile from "@/stories/assets/Icons/Profile.svg";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserNav = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<Image
									src={Profile}
									alt={"profile icon"}
									className="w-8 h-8"
								/>
							</NavigationMenuTrigger>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className="w-56 m-4 mt-0"
				align="end"
				forceMount
			>
				<DropdownMenuGroup className="text-lg">
					<DropdownMenuItem className="py-3">
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem className="py-3 text-red-700 ">
						Log out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
