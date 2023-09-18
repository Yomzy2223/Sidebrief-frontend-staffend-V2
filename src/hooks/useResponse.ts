import { useToast } from "@/components/ui/use-toast";

export const useResponse = () => {
  const { toast } = useToast();
  interface responseType {
    title?: string;
    action?: any;
    hideIcon?: boolean;
  }
  interface successType extends responseType {
    data: any;
  }
  interface errorType extends responseType {
    error: any;
  }

  const handleError = ({ error, title, action, hideIcon }: errorType) => {
    toast({
      className: "bg-red-200 border-secondary",
      title,
      description: error.response.data.error,
      action,
    });
  };

  const handleSuccess = ({ data, title, action, hideIcon }: successType) => {
    toast({
      className: "bg-blue-100 ",
      title,
      description: data?.data?.message,
      action,
    });
  };

  return {
    handleError,
    handleSuccess,
  };
};
