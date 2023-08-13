import { Dialog } from "@/components/customdialog";
import { AddOrEditBankForm } from "./Form";
import type { IBank } from "@/types/returns";

type addEditBankProps = {
	triggerText: string;
	variant: "add" | "edit";
} & (
	| {
			variant: "edit";
			bankname: string;
			adminName: string;
			adminEmail: string;
	  }
	| { variant: "add"; banks: IBank[] }
);

export const AddOrEditBank = (props: addEditBankProps) => {
	return (
		<Dialog
			dialogType="normal"
			triggerText={props.triggerText}
			footer={false}
			title={props.variant === "edit" ? props.bankname : "Add new bank"}
		>
			<AddOrEditBankForm
				isAdd={props.variant === "add"}
				banks={
					props.variant === "add"
						? props.banks
						: [
								// should be replaced later
								{
									id: "07efc1ca-0cec-4556-b1ea-b2645e3721d5",
									name: "Fidelity Bank",
									color: null,
									slug: "fidelity-bank",
									logo: "https://nigerianbanks.xyz/logo/fidelity-bank.png",
									createdAt: "2023-08-12T08:58:25.747Z",
									updatedAt: "2023-08-12T08:58:25.747Z",
								},
						  ]
				}
				details={
					props.variant === "edit" && {
						// adminName: props.adminName,
						adminEmail: props.adminEmail,
					}
				}
			/>
		</Dialog>
	);
};
