"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ProgressBar } from "./progressBar";
import { useFileUpload } from "@/hooks/utilityHooks";
import { cn } from "@/lib/utils";

export const FileUpload = ({
  collectFile,
}: {
  collectFile: ({}: { url: string; name: string; type: string }) => void;
}) => {
  const [file, setFile] = useState<File>();
  const { mutate: uploadFile, uploadProgress } = useFileUpload();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
      uploadFile(acceptedFiles[0], {
        onSuccess: (data) => {
          console.log(data);
          const file = data.data;
          collectFile({ url: file.url, name: file.original_filename, type: file.format });
        },
      });
    },
    [uploadFile, collectFile]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop, noClick: !!file });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div
          {...getRootProps()}
          className={cn("px-4 py-2.5 w-full border border-dashed bg-grey rounded-lg", {
            "cursor-pointer": !file,
          })}
        >
          <Input {...getInputProps({ multiple: false, id: "file" })} />
          <p className="text-foreground-grey">
            {file ? (
              <>
                <u>{file.name}</u>
              </>
            ) : (
              "Select or drag and drop your file"
            )}
          </p>
        </div>
        {!!file && (
          <Label htmlFor="file" className="underline cursor-pointer text-secondary">
            Replace
          </Label>
        )}
      </div>
      {uploadProgress !== 0 && <ProgressBar percent={uploadProgress} />}
    </div>
  );
};
