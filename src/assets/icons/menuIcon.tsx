import React from "react";

const MenuIcon = ({
	className,
}: {
	className?: { svg?: string; path?: string };
}) => {
	return (
		<svg
			className={className?.svg}
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
		>
			<g clipPath="url(#clip0_9783_104256)">
				<path
					className={className?.path}
					d="M1.33333 20H22.6667C23.4 20 24 19.4 24 18.6667C24 17.9333 23.4 17.3333 22.6667 17.3333H1.33333C0.6 17.3333 0 17.9333 0 18.6667C0 19.4 0.6 20 1.33333 20ZM1.33333 13.3333H22.6667C23.4 13.3333 24 12.7333 24 12C24 11.2667 23.4 10.6667 22.6667 10.6667H1.33333C0.6 10.6667 0 11.2667 0 12C0 12.7333 0.6 13.3333 1.33333 13.3333ZM0 5.33333C0 6.06667 0.6 6.66667 1.33333 6.66667H22.6667C23.4 6.66667 24 6.06667 24 5.33333C24 4.6 23.4 4 22.6667 4H1.33333C0.6 4 0 4.6 0 5.33333Z"
					fill="#DE4A09"
				/>
			</g>
			<defs>
				<clipPath id="clip0_9783_104256">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default MenuIcon;
