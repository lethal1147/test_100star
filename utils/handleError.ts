import { BaseResponse } from "@/types/utilsType";
import { ExternalToast, toast } from "sonner";

export function formatErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  } else if (typeof err === "string") {
    return err;
  } else {
    return "An unexpected error occurred";
  }
}

export const handleError = (
  err: unknown,
  status: number = 400
): BaseResponse => {
  const isProd = process.env.NODE_ENV !== "production";
  if (isProd) console.error(err);
  return {
    error: true,
    status,
    message: formatErrorMessage(err),
    ...(isProd && { stack: err }),
  };
};

export async function alertError(error: unknown, options?: ExternalToast) {
  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred";

  toast.error(errorMessage, {
    duration: 5000,
    ...options,
  });
}
