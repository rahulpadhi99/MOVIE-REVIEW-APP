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
      try {
        const { data, ...rest } = await queryFunction(functionParams);
        return { ...data, ...rest };
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
    { ...options, refetchOnWindowFocus: false }
  );
  return result;
};

export default useQueryHook;
