import {
  QueryKey,
  QueryFunction,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type TData = unknown;
export type TError = unknown;
export type TQueryFnData = unknown;
export type TQueryKey = QueryKey;
export type TQueryFunction = () => Promise<AxiosResponse<any, any>>;
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
