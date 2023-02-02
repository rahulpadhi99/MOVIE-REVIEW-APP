import { useMutation, UseMutationResult } from "@tanstack/react-query";
import {
  TData,
  TError,
  TContext,
  TVariables,
  TMutationKey,
  TMutationFunction,
  TOptions,
} from "./useMutationHook";

const useMutationHook = (
  mutationKey: TMutationKey,
  queryFunction: TMutationFunction,
  options?: TOptions
) => {
  const result: UseMutationResult<TData, TError, TVariables, TContext> =
    useMutation(mutationKey, queryFunction, {
      ...options,
    });
  return result;
};

export default useMutationHook;
