"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import HomeIcon from "@/assets/icons/homeIcon";
import DetailsIcon from "@/assets/icons/detailsIcon";
import SettingsIcon from "@/assets/icons/settingsIcon";
import LogoutIcon from "@/assets/icons/logoutIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Sidebar = () => {
	const [open, setOpen] = useState(true);

	const pathname = usePathname();

	const variants = {
		open: { width: "237px" },
		closed: { width: "101px" },
	};

	const sidebarItems = [
		{ href: "/", text: "Home", icon: HomeIcon },
		{ href: "/details", text: "Details", icon: DetailsIcon },
		{ href: "/settings", text: "Settings", icon: SettingsIcon },
	];

	return (
		<motion.div
			className={cn(
				"flex flex-col flex-1 gap-12 border-r border-border w-[237px] h-full py-4 px-6 items-start",
				!open && "w-max"
			)}
			animate={open ? "open" : "closed"}
			variants={variants}
			transition={{ type: "spring", bounce: 0.5 }}
		>
			<Button
				variant="ghost"
				className="px-0 py-0 mx-3 min-w-max h-max "
				onClick={() => setOpen(!open)}
			>
				<Menu className="w-6 h-6" />
			</Button>
			<div className="flex flex-col justify-between flex-1 text-xs ">
				<div className="flex flex-col gap-2 ">
					{sidebarItems.map((item, i) => (
						<Link
							href={item.href}
							key={i}
							className={cn(
								"group flex px-4 py-3 hover:text-foreground-blue rounded-lg ",
								pathname?.startsWith(item.href) &&
									"bg-background-blue"
							)}
						>
							<div className="flex items-center gap-2 ">
								<item.icon
									className={{
										path: "group-hover:fill-foreground-blue",
									}}
								/>
								{open && (
									<span className="text-inherit">
										{item.text}
									</span>
								)}
							</div>
						</Link>
					))}
				</div>
				<Link href="" className="flex items-center gap-2 px-4 py-3 ">
					<div className="flex items-center gap-2 ">
						<LogoutIcon />
						{open && <p>Logout</p>}
					</div>
				</Link>
			</div>
		</motion.div>
	);
};

export default Sidebar;
