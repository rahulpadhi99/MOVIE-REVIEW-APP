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
  options?: TOptions
) => {
  const result = useQuery<UseQueryResult<TData, TError>>(
    queryKey,
    async () => {
      try {
        const { data } = await queryFunction();
        return data;
      } catch (error) {
        return error;
      }
    },
    options
  );
  return result;
};

export default useQueryHook;
