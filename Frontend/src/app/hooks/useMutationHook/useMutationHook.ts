import {
  MutationKey,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type TData = unknown;
export type TError = unknown;
export type TContext = unknown;
export type TVariables = any;
export type TQueryFnData = unknown;
export type TMutationKey = MutationKey;
export type TMutationFunction = (
  functionParams: any
) => Promise<AxiosResponse<any, any>>;
export type TOptions =
  | Omit<
      UseMutationOptions<TData, TError, TVariables, TContext>,
      "mutationKey" | "mutationFn"
    >
  | undefined;
