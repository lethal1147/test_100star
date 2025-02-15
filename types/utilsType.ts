export type BaseResponse<T = void> = {
  error: boolean;
  message: string;
  status: number;
  data?: T;
  stack?: unknown;
};
