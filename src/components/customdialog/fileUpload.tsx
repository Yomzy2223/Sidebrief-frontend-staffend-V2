import { Input } from "@/components/ui/input";

export const FileUpload = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="picture" type="file" />
    </div>
  );
};
