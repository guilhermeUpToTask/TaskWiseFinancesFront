// File: hooks/useMutationWithMessage.js
import { useMutation, useQueryClient } from 'react-query';
import { message } from 'antd';

type SuccessMessage = string | ((data: any) => string);
type ErrorMessage = string | ((error: any) => string);

interface UseMutationResult {
    mutate: (variables: any) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: any;
    data: any;
  }
interface UseMutationProps<TVariables, TData> {
    serviceFunction: (variables: TVariables) => Promise<TData>,
    successMessage?: SuccessMessage,
    errorMessage?: ErrorMessage,
    queryKey?: string
}

export const useMutationWithMessage = <TVariables, TData>(
  props:UseMutationProps<TVariables, TData>
    ):UseMutationResult => {

      const {serviceFunction, successMessage="Sucesss!", queryKey, errorMessage="Something Wrong Happened!"} = props;

        const queryClient = useQueryClient();
        let loadingMessage: any; // Reference to the loading message instance
      
        return useMutation((variables) => serviceFunction(variables), {
          onMutate: () => {
            loadingMessage = message.loading('Processing...', 0); // Display the loading message
          },
          onSuccess: (data) => {
            if (loadingMessage) loadingMessage(); // Close the loading message
            message.success(
              typeof successMessage === 'function' ? successMessage(data) : successMessage
            );
      
            // Invalidate the query cache to trigger a refetch
            if (queryKey) {
              queryClient.refetchQueries(queryKey)
            }else{
              queryClient.refetchQueries()
            }
          },
          onError: (error) => {
            console.log('errror')
            if (loadingMessage) loadingMessage(); // Close the loading message
            message.error(
              typeof errorMessage === 'function' ? errorMessage(error) : errorMessage
            );
          },
          onSettled: () => {
            if (loadingMessage) loadingMessage(); // Ensure the loading message is always closed
          },
        });
      };