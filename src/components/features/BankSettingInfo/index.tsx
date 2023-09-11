import Image, { StaticImageData } from "next/image";
import { AddOrEditBank } from "../AddOrEditBank";
import { Skeleton } from "@/components/ui/skeleton";

interface BankInfoProps {
  image: string | StaticImageData;
  name: string;
  address: string;
  adminEmail: string;
  brandColor?: string;
  id: string;
  loading: boolean;
}

export const BankSettingInfo = ({
  image,
  name,
  address,
  adminEmail,
  brandColor,
  id,
  loading,
}: BankInfoProps) => {
  return (
    <div className="space-y-4">
      <h6 className="text-xl font-semibold leading-6 text-foreground">Bank Information</h6>
      <div className="flex gap-6 p-6 border divide-x rounded-sm">
        <div className="grow">
          <div className="relative w-[148px] h-[148px] rounded-sm overflow-hidden">
            {loading ? (
              <Skeleton className="w-full h-full" />
            ) : (
              <Image src={image} alt={`${name}-image`} fill />
            )}
          </div>
        </div>
        <div className="flex grow-[5] divide-x">
          <div className="flex flex-col px-6 divide-y grow">
            <Detail detailName="Bank name" detail={name} loading={loading} />
            <Detail detailName="Bank headquarters address" detail={address} loading={loading} />
          </div>
          <div className="flex flex-col px-6 divide-y grow">
            <Detail detailName="Account admin email" detail={adminEmail} loading={loading} />
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
              logo={typeof image === "string" ? image : image.src}
              color={brandColor || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({
  detail,
  detailName,
  loading,
}: {
  detailName: string;
  detail: string;
  loading: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center space-y-2 grow">
      <p className="text-base font-medium leading-snug text-foreground tracking-[0.32px]">
        {detailName}
      </p>
      {loading ? (
        <Skeleton className="h-[16px] w-[250px]" />
      ) : (
        <p className="text-base leading-relaxed text-muted-foreground">{detail}</p>
      )}
    </div>
  );
};
