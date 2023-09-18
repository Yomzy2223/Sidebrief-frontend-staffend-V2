import { FileUpload } from "./index";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRequest } from "@/hooks/useRequest";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const requestVerifySchema = z.object({
  name: z.string().nonempty("you need to upload a file"),
  link: z.string().nonempty("you need to upload a file"),
  type: z.string().nonempty("you need to upload a file"),
  description: z.string(),
});

interface requestVerifyFormProps {
  requestId: string;
  closeModal: () => void;
}

export const RequestVerifyForm = ({ requestId, closeModal }: requestVerifyFormProps) => {
  const { useSubmitRequestDocument } = useRequest();
  const submitRequestDocument = useSubmitRequestDocument();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof requestVerifySchema>>({
    resolver: zodResolver(requestVerifySchema),
    defaultValues: {
      name: "",
      description: "",
      link: "",
      type: "",
    },
  });

  function onSubmit(values: z.infer<typeof requestVerifySchema>) {
    submitRequestDocument.mutate(
      { requestId, formInfo: values },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["All Request"] });
          form.reset();
          closeModal();
        },
      }
    );
  }

  const collectFile = ({ url, name, type }: { url: string; name: string; type: string }) => {
    form.setValue("link", url, { shouldValidate: true });
    form.setValue("name", name, { shouldValidate: true });
    form.setValue("type", type, { shouldValidate: true });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload collectFile={collectFile} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Textarea placeholder="Start writing" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex self-end gap-4">
            <Button type="button" variant={"ghost"} onClick={closeModal}>
              Close
            </Button>
            <Button type="submit" loading={submitRequestDocument.isLoading}>
              Upload
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
