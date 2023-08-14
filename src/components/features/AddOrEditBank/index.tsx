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
									id: "Some-id",
									name: props.bankname,
									color: null,
									slug: "",
									logo: "",
									createdAt: "",
									updatedAt: "",
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
