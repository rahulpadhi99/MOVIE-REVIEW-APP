import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type TData = any;
export type TError = any;
export type TQueryFnData = unknown;
export type TQueryKey = QueryKey;
export type TQueryFunction = (
  functionParams: any
) => Promise<AxiosResponse<any, any>>;
export type TOptions =
  | Omit<
      UseQueryOptions<
        UseQueryResult<unknown, unknown>,
        unknown,
        UseQueryResult<unknown, unknown>,
        QueryKey
      >,
      "queryKey" | "queryFn"
    >
  | undefined;
