import { CheckCircle, CircleAlert, X } from "lucide-react";
import type React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormMessageProps {
  message?: string | React.ReactNode;
  variant?: "error" | "success" | "warning";
  description?: string;
  handleDismiss?: () => void;
}

function FormMessage({ message, variant = "error", description, handleDismiss }: FormMessageProps) {
  if (!message) {
    return null;
  }

  const Icon =
    variant === "error" ? CircleAlert : variant === "warning" ? CircleAlert : CheckCircle;

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-md p-3 text-sm",
        variant === "success" &&
          "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
        variant === "error" &&
          "bg-destructive/15 text-destructive dark:bg-destructive/40 dark:text-red-400",
        variant === "warning" &&
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-x-2">
          <Icon className="h-4 w-4 shrink-0" />
          {typeof message === "string" ? <p>{message}</p> : <div>{message}</div>}
        </div>

        {description && <p className=" text-sm opacity-70">{description}</p>}
      </div>
      {handleDismiss && (
        <Button variant="ghost" size="icon" onClick={handleDismiss}>
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
export default FormMessage;
