import { useToast } from "@/components/ui/use-toast";

export const useResponse = () => {
  const { toast } = useToast();

  const handleError = ({ error, title, action }: { error: any; title?: string; action?: any }) => {
    console.log(error);
    toast({
      className: "bg-red-200",
      title,
      description: error?.response?.data?.error,
    });
  };

  const handleSuccess = ({ data, title, action }: { data: any; title?: string; action?: any }) => {
    toast({
      className: "bg-green-200",
      title,
      description: data?.data?.message,
      action: action,
    });
  };

  return {
    handleError,
    handleSuccess,
  };
};
