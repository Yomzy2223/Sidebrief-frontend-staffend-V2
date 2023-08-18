import Image from "next/image";
import { AddOrEditBank } from "../AddOrEditBank";

interface BankInfoProps {
  image: any;
  name: string;
  address: string;
  adminEmail: string;
  brandColor?: string;
  id: string;
}

export const BankSettingInfo = ({
  image,
  name,
  address,
  adminEmail,
  brandColor,
  id,
}: BankInfoProps) => {
  return (
    <div className="space-y-4">
      <h6 className="text-xl font-semibold leading-6 text-foreground">Bank Information</h6>
      <div className="flex gap-6 p-6 border divide-x rounded-sm">
        <div className="grow">
          <div className="relative w-[148px] h-[148px] rounded-sm overflow-hidden">
            <Image src={image} alt={`${name}-image`} fill />
          </div>
        </div>
        <div className="flex grow-[5] divide-x">
          <div className="flex flex-col px-6 divide-y grow">
            <Detail detailName="Bank name" detail={name} />
            <Detail detailName="Bank headquarters address" detail={address} />
          </div>
          <div className="flex flex-col px-6 divide-y grow">
            <Detail detailName="Account admin email" detail={adminEmail} />
          </div>
        </div>
        <div className="flex justify-end grow">
          <div className="flex flex-col items-start">
            <AddOrEditBank
              variant="edit"
              adminEmail={adminEmail}
              bankname={name}
              address={address}
              triggerText="Edit"
              bankId={id}
              logo={image}
              color={brandColor || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ detail, detailName }: { detailName: string; detail: string }) => {
  return (
    <div className="flex flex-col justify-center space-y-2 grow">
      <p className="text-base font-medium leading-snug text-foreground tracking-[0.32px]">
        {detailName}
      </p>
      <p className="text-base leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  );
};
