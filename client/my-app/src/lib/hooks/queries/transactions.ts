import { transactionsApi } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useTransactions = (userId: number) => {
  const { data: transactions, isLoading, error } = useQuery({
    queryKey: ['transactions', userId],
    queryFn: () => transactionsApi.getTransactions(userId),
    enabled: !!userId,
  });

  return { transactions, isLoading, error };
};
