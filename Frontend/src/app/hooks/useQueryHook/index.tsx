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
  const result = useQuery<UseQueryResult<TData, TError> | any>(
    queryKey,
    async () => {
      const { data, ...rest } = await queryFunction();
      return { ...data, ...rest };
    },
    options
  );
  return result;
};

export default useQueryHook;
