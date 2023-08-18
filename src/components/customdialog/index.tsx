import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type IdialogProps = {
  dialogType: "state" | "normal";
  showCloseButton?: boolean;
  title?: string;
  titleVariant?: VariantProps<typeof titleVariants>;
  description?: string;
  children?: ReactNode;
  brandColor?: string;
  footer?: boolean;
} & (
  | { dialogType: "state"; open: boolean; cancel: () => void; setter?: (a: boolean) => void }
  | {
      dialogType: "normal";
      triggerText: string;
      triggerVariant?: VariantProps<typeof buttonVariants>;
      setter?: (a: boolean) => void;
      open?: boolean;
    }
) &
  ({ footer: true; actionText: string; action: () => void } | { footer: false | undefined });

export const Dialog = (props: IdialogProps) => {
  return (
    <>
      {props.dialogType === "normal" && (
        <DialogRoot open={props.open} onOpenChange={props.setter}>
          <DialogTrigger asChild>
            <Button
              color={props.brandColor}
              variant={props.triggerVariant?.variant}
              size={props.triggerVariant?.size}
            >
              {props.triggerText}
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[554px] p-6 max-h-[80vh] overflow-auto"
            showClose={props.showCloseButton}
          >
            {(props.description || props.title) && (
              <DialogHeader className="space-y-[24px] mb-4">
                {props.title && <Title {...props.titleVariant}>{props.title}</Title>}
                {props.description && (
                  <DialogDescription className="text-lg leading-[1.3]">
                    {props.description}
                  </DialogDescription>
                )}
              </DialogHeader>
            )}
            {props.children}
            {props.footer && (
              <DialogFooter className="mt-8">
                <DialogClose>
                  <Button type="submit" color={props.brandColor} onClick={props.action}>
                    {props.actionText}
                  </Button>
                </DialogClose>
              </DialogFooter>
            )}
          </DialogContent>
        </DialogRoot>
      )}
      {props.dialogType === "state" && (
        <DialogRoot open={props.open} onOpenChange={props.setter}>
          <DialogContent
            className="sm:max-w-[554px] p-6"
            showClose={props.showCloseButton}
            cancel={props.cancel}
          >
            {(props.description || props.title) && (
              <DialogHeader className="space-y-[24px] mb-4">
                {props.title && (
                  <DialogTitle className="text-2xl leading-[1.3] text-foreground-dark">
                    {props.title}
                  </DialogTitle>
                )}
                {props.description && (
                  <DialogDescription className="text-lg leading-[1.3]">
                    {props.description}
                  </DialogDescription>
                )}
              </DialogHeader>
            )}
            {props.children}
            {props.footer && (
              <DialogFooter className="mt-8">
                <DialogClose>
                  <Button type="submit" color={props.brandColor} onClick={props.action}>
                    {props.actionText}
                  </Button>
                </DialogClose>
              </DialogFooter>
            )}
          </DialogContent>
        </DialogRoot>
      )}
    </>
  );
};

export default Dialog;

const titleVariants = cva("text-2xl leading-[1.3] text-foreground-dark", {
  variants: { center: { true: "text-center" } },
});

interface titleProp extends VariantProps<typeof titleVariants> {
  children: string;
  className?: string;
}

const Title = ({ children, center, className }: titleProp) => {
  return <DialogTitle className={cn(titleVariants({ center, className }))}>{children}</DialogTitle>;
};
