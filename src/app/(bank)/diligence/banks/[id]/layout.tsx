import { BankDetailHeader } from "./header";

export default function BankDetailLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { id: string };
}) {
	return (
		<div>
			<BankDetailHeader id={params.id} />
			{children}
		</div>
	);
}
