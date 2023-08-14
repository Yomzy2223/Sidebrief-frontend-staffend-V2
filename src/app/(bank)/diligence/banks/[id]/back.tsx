"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icons/back.svg";
import Image from "next/image";

export const Back = () => {
	const router = useRouter();

	return (
		<Button
			variant="ghost"
			size="icon"
			className="flex gap-4 py-2 h-max w-max hover:bg-white"
			onClick={() => {
				router.back();
			}}
		>
			<Image src={backIcon} alt="" width={20} height={20} />
			Back
		</Button>
	);
};
