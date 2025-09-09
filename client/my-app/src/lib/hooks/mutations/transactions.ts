import { transactionsApi } from '@/shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddTransaction = () => {
    const queryClient = useQueryClient();
    
    const { mutateAsync: addTransaction } = useMutation({
      mutationFn: ({id, title, amount}: { id: number, title: string, amount: number }) => transactionsApi.addTransaction({ user_id: id, title, amount }),
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({
          queryKey: ['transactions', variables.id],
        });
      },
    }); 

    return {
      addTransaction
    };
  };