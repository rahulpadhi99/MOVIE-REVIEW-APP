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
      onSuccess: (data) => {
        return data; //This is the response you get back
      },
      onError: (error) => {
        return error;
      },
    });
  return result;
};

export default useMutationHook;
