import { useQuery } from 'react-query';
import { Dayjs } from 'dayjs';
import type { WalletOperation } from '../lib/types';
import { fetchWalletOperationsByMonth } from '../services/operations';

export default function useOperationsByMonth(currentMonth: Dayjs) {
    const year = currentMonth.year();
    const month = currentMonth.month() + 1;

    return useQuery<WalletOperation[]>({
        queryKey: ['operations', year, month],
        queryFn: () => fetchWalletOperationsByMonth(year, month),
    });
}