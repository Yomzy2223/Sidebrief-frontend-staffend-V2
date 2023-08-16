import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { Download, Pdf } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { handleDownloadFile } from "@/lib/globalFunctions";
import { format, parseJSON } from "date-fns";

const FileDisplayVariants = cva(
  "p-4 pr-6 border border-dashed rounded-lg flex justify-between items-center",
  {
    variants: {
      variant: {
        success: "border-success",
        error: "border-destructive",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

interface FileDisplayProps extends VariantProps<typeof FileDisplayVariants> {
  className?: string;
  fileName: string;
  type: string;
  link: string;
  date: string;
  description: string;
}

export const FileDisplay = ({
  variant,
  className,
  fileName,
  type,
  link,
  date,
  description,
}: FileDisplayProps) => {
  const downloadFile = () => {
    handleDownloadFile(link, fileName);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className={cn(FileDisplayVariants({ variant }), className)}>
          <div className="flex items-center gap-2">
            <Image src={Pdf} alt={"file type"} />
            <p className="text-base leading-7 underline">{fileName}</p>
          </div>
          <Button variant={"ghost"} size={"slim"} onClick={downloadFile}>
            <Image src={Download} alt="" />
          </Button>
        </div>
        <div className="bg-secondary/10 w-fit p-2.5 rounded">
          <span className="text-secondary">
            Uploaded by {format(parseJSON(date), "h:mm aaa, d/M/yyyy.")}
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-lg font-semibold">Note</p>
        <div className="p-2.5 border rounded">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
