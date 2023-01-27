import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  TData,
  TError,
  TQueryKey,
  TQueryFunction,
  TOptions,
} from "./useQueryHook";

const useQueryHook = (
  queryKey: TQueryKey,
  queryFunction: TQueryFunction,
  functionParams?: any,
  options?: TOptions
) => {
  const result = useQuery<UseQueryResult<TData, TError> | any>(
    queryKey,
    async () => {
      const { data } = await queryFunction(functionParams);
      return data;
    },
    { ...options, refetchOnWindowFocus: false }
  );
  return result;
};

export default useQueryHook;
